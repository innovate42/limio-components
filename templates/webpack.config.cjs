// build a bundle for use in the page builder & renderAsset
const path = require("path")
const webpack = require("webpack")
const fs = require("fs")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const {  includeProjectFiles } = require("@i42/shared/src/webpack/helpers.cjs")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const LimioLoaderPlugin = require("@limio/weback-limio-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")
const LimioDependencyPlugin = require("@limio/weback-limio-dependencies")
const postcssPrefix = require("@limio/postcss-prefix-selector")
const autoprefixer = require("autoprefixer")
const flexbugs = require("postcss-flexbugs-fixes")
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

let ident = 0

function postcss() {
  return {
    loader: require.resolve(`postcss-loader`),
    options: {
      ident: `postcss-${++ident}`,
      sourceMap: true,
      plugins: loader => {
        const autoprefixerPlugin = autoprefixer({
          flexbox: `no-2009`
        })

        return [flexbugs, postcssPrefix({ prefix: ".lmo" }), autoprefixerPlugin]
      }
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

  if (entry.includes("..")) {
    throw new Error(`invalid entry ${entry}`)
  }

  if (!entry.startsWith("./")) {
    entry = "./" + entry
  }

  // check if the file exists
  if (!fs.existsSync(path.join(context, entry))) {
    // see if there is an index.js file and we'll use that
    // some of the existing components uploaded by the economist are wrong
    if (fs.existsSync(path.join(context, "index.js"))) {
      entry = "./index.js"
    } else {
      throw new Error(`Entry file doesn't exist: ${entry}`)
    }
  }
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
    iife: false,
    filename: "js/bundle.[contenthash].js",
    libraryTarget: "commonjs2",
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
      template: path.join(__dirname, "index.html")
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"]
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].[contenthash].css",
      chunkFilename: "[id].css"
    }),
    new webpack.BannerPlugin({
      banner: `version: ${versionStr}`
    }),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(versionStr)
    }),
    new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false }),
    new LimioLoaderPlugin(),
    new LimioDependencyPlugin()
  ],
  optimization: {
    minimizer: [
      // new TerserPlugin({
      //   parallel: true,
      //   terserOptions: {
      //     allowReturnOutsideFunction: true
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
  externals: [
    // externalise @babel/runtime
    // function ({ context, request }, callback) {
    //   if (/^@babel\/runtime\/.*$/.test(request)) {
    //     // Externalize to a commonjs module using the request path
    //     return callback(null, "commonjs " + request)
    //   }
    //   // Continue without externalizing the import
    //   callback()
    // },
    {
      // these things we only need one of
      //"regenerator-runtime": "commonjs2 regenerator-runtime",
      // these things we should only have one of and must be external
      "@reach/router": "commonjs2 @reach/router",
      react: "commonjs2 react",
      "react-dom": "commonjs2 react-dom",
      gatsby: "commonjs2 gatsby", // not sure why this would be loaded.
      redux: "commonjs2 redux",
      "react-redux": "commonjs2 react-redux",
      "@sentry/browser": "commonjs2 @sentry/browser",

      // these things not really sure if they need to be only one, but they are also used a lot
      "@limio/swr": "commonjs2 @limio/swr",
      "prop-types": "commonjs2 prop-types",
      "paypal-checkout": "commonjs2 paypal-checkout",
      // these are quite big and we use quite extensively. - so include them externally
      "@fortawesome/fontawesome-svg-core": "commonjs2 @fortawesome/fontawesome-svg-core",
      "@fortawesome/react-fontawesome": "commonjs2 @fortawesome/react-fontawesome",
      moment: "commonjs2 moment",
      ramda: "commonjs2 ramda",

      // this uses a singleton pattern and needs one instance only
      "@i42/shared/src/shop/store": "commonjs2 @i42/shared/src/shop/store",
      "@limio/sdk": "commonjs2 @limio/sdk",
      "@limio/design-system": "commonjs2 @limio/design-system"
    }
  ],
  resolve: {
    // allow local module resolution, note we have to put local last as there are some clashes when a src directory has the same name as an  node_modules (eg redux)
    //modules: ["./node_modules", path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "../../node_modules"), path.resolve(__dirname, "src")],
    modules: [path.join(context, "node_modules"), "node_modules"],
    extensions: [".mjs", ".js", ".jsx", ".svg", ".tsx", ".js.flow", ".json", ".ts"],
    alias: {
      //"@limio/design-system": path.resolve(__dirname, path.join("..", "..", "..", "packages", "design-system", process.env.DESIGN_SYSTEM || "default"))
      //"@limio/sdk": path.resolve(__dirname, "../../../packages/limio-sdk/src") // resolve this to src, not lib dir
    },
    fallback: {
      path: require.resolve("path-browserify"),
      buffer: require.resolve("buffer/"),
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
        },
        resolve: {
          fullySpecified: false
        }
      },

      {
        test: /\.css$/,
        sideEffects: true,
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
              },
              postcss()
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
              postcss()
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
              postcss(),
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
              postcss(),
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
              postcss(),
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
              postcss(),
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
