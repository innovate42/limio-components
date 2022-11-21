Interium solution to build customer components

Steps

1. Copy build files, eg

https://economist-bau-preprod.prod.limio.com/public/d3b8c22e-cd7e-43dc-97b1-c225ad4f558f/.limio-asset-dist/bundle.js?id=0b2a44d6-2796-4db6-aab9-a667a6112093

aws-run -p prod -- aws s3 cp --recursive --exclude ".limio-asset-dist" s3://econ4.assets.limio.com/public/d3b8c22e-cd7e-43dc-97b1-c225ad4f558f ./build  
yarn build:custom
aws-run -p prod aws s3 cp --recursive .limio-asset-dist s3://econ4.assets.limio.com/public/d3b8c22e-cd7e-43dc-97b1-c225ad4f558f/.limio-asset-dist
