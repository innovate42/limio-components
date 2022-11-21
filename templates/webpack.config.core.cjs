// build a bundle for use in the page builder & renderAsset
const path = require("path")
const webpack = require("webpack")
const fs = require("fs")
//const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const {  includeProjectFiles } = require("@i42/shared/src/webpack/helpers.cjs")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackPrerenderPlugin = require("html-webpack-prerender-plugin")
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")

// process package.json.  we need to run this from the component dir
let entry = "./index.js"

function getContextFromCli() {
  for (let i = 0; i < process.argv.length; i++) {
    const arg = process.argv[i]
    if (arg === "--context") {
      return process.argv[i + 1]
    }
  }
}

// figure out the context, we need to run this from the serivces/components directory, but the context will be the module we are tyring to transform
// this is so we load webpack from  serivces/components, rather than needing to reference it in each component
const context = getContextFromCli() || process.cwd()
const componentDirName = path.basename(context)

// check to see if a different entry is mentioned in package.json for the package
const pkgJson = path.join(context, "./package.json")
if (fs.existsSync(pkgJson)) {
  const pkg = require(pkgJson)
  console.log(`building ${pkg.name}`)
  entry = pkg.entry || pkg.main || "./index.js"
} else {
  throw new Error("package.json is required")
}

const versionStr = `${pkgJson.name}@${pkgJson.version}+${process.env.IMAGE_TAG}`

console.log(`building ${context} entry is ${entry}`)
const publicPath = `/limio-components/${componentDirName}/.limio-asset-dist/`

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: [entry],
  output: {
    path: path.join(context, "./.limio-asset-dist"),
    publicPath,
    iife: true,
    filename: "bundle.js",
    library: {
      name: "__limio__", // there are no exports from the loader, but we need to specifiy the library target as something so use the __limio__ variable
      type: "assign-properties"
    },
    globalObject: "window"
  },
  plugins: [
    new WebpackManifestPlugin({
      map: fd => {
        // change the paths to relative
        return { ...fd, path: path.relative(publicPath, fd.path) }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    //new HtmlWebpackPrerenderPlugin({ main: { selector: "#root", scope: { __limio_modules } }}),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"]
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.BannerPlugin({
      banner: `version: ${versionStr}`
    }),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(versionStr),
      "process.env.TENANT": JSON.stringify(process.env.TENANT),
      "process.env.SHARD": JSON.stringify(process.env.SHARD),
      "process.env.DOMAIN": JSON.stringify(process.env.DOMAIN)
    }),
    new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false })
  ],
  optimization: {
    minimizer: [
      // new TerserPlugin({
      //   parallel: true,
      //   terserOptions: {
      //     // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
      //   }
      // }),
      new CssMinimizerPlugin()
    ]
    // splitChunks: {
    //   chunks: "all"
    // },
    // runtimeChunk: {
    //   name: "bundle"
    // }
  },
  // make any module avaliable in the frontend as external
  externals: [],
  resolve: {
    // allow local module resolution, note we have to put local last as there are some clashes when a src directory has the same name as an  node_modules (eg redux)
    //modules: ["./node_modules", path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "../../node_modules"), path.resolve(__dirname, "src")],
    extensions: [".mjs", ".js", ".jsx", ".svg", ".tsx", ".js.flow", ".json", ".ts"],
    alias: {
      "@limio/design-system": path.resolve(__dirname, path.join("..", "..", "..", "packages", "design-system", process.env.DESIGN_SYSTEM || "default")),
      "@limio/sdk": path.resolve(__dirname, "../../../packages/limio-sdk/src"), // resolve this to src, not lib dir
      "@limio/swr": require.resolve("@limio/swr"),
      react: require.resolve("react"),
      redux: require.resolve("redux"),
      "react-dom": require.resolve("react-dom"),
      "react-redux": require.resolve("react-redux"),
      "@sentry/browser": require.resolve("@sentry/browser")
    },
    fallback: {
      buffer: require.resolve("buffer/"),
      path: require.resolve("path-browserify"),
      vm: false,
      url: false,
      fs: false,
      https: false,
      crypto: false // used by amazon-cognito-identity-js, but this should use the browser inbuilt version not the node version.
    }
  },
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        include: [process.cwd(), includeProjectFiles()],
        use: {
          // define the babel config here.  This allows us to override the env to es6 modules (Which is helpful for debugging)  at present
          // the bundle is only loaded in the app, and we can assume that we'll have es6 support
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              [require.resolve("@babel/preset-env"), { targets: "last 2 Chrome versions" }],
              require.resolve("@babel/preset-flow"),
              [
                require.resolve("@babel/preset-react"),
                {
                  throwIfNamespace: false // defaults to true
                }
              ]
            ],
            plugins: [
              require.resolve("@limio/babel-plugin-fortawesome"),
              require.resolve("@babel/plugin-proposal-optional-chaining"),
              require.resolve("@babel/plugin-proposal-nullish-coalescing-operator"),
              require.resolve("@babel/plugin-proposal-class-properties")
              // [
              //   require.resolve("@babel/plugin-transform-runtime"),
              //   {
              //     corejs: false,
              //     helpers: false,
              //     regenerator: false,
              //     useESModules: false
              //   }
              // ]
            ]
          }
        }
      },

      {
        test: /\.css$/,
        oneOf: [
          {
            test: /\.module.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve("css-loader"),
                options: {
                  sourceMap: true,
                  modules: "global"
                }
              }
            ]
          },
          {
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve("css-loader"),
                options: {
                  sourceMap: true,
                  modules: false
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.less$/,
        oneOf: [
          {
            test: /\.module.less$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve("css-loader"),
                options: {
                  sourceMap: true,
                  modules: "global"
                }
              },
              {
                loader: require.resolve("less-loader"),
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          {
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve("css-loader"),
                options: {
                  sourceMap: true,
                  modules: false
                }
              },
              {
                loader: require.resolve("less-loader"),
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        oneOf: [
          {
            test: /\.module.s[ac]ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve("css-loader"),
                options: {
                  sourceMap: true,
                  modules: "global"
                }
              },
              {
                loader: require.resolve("sass-loader"),
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          {
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve("css-loader"),
                options: {
                  sourceMap: true,
                  modules: false
                }
              },
              {
                loader: require.resolve("sass-loader"),
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.(gif|jpe?g|png)$/,
        use: [
          {
            loader: require.resolve("url-loader"),
            options: {
              limit: 4192,
              fallback: require.resolve("responsive-loader")
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: {
          loader: require.resolve("svg-url-loader"),
          options: {}
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: require.resolve("file-loader"),
            options: {
              name: "public/fonts/[name].[ext]"
            }
          }
        ]
      },
      // to work around issue with mjs files: see https://github.com/graphql/graphql-js/issues/1272
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  }
}
