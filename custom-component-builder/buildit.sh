#!/usr/bin/env bash
# prod version of aws-run.  Doesn't really do anything
set -e

SHARD=
ASSETID=

RUNDIR=$(dirname "$0")

usage () {
cat <<EOF >&2

Builds a custom sset

     usage: $(basename $0) -s shard -a asset_id

Options:

    -s: shard to use
    -a: asset id 

EOF
}

while getopts "s:a:" opt; do
    case "$opt" in
    s)  SHARD=$OPTARG
        ;;
    a)  ASSETID=$OPTARG
        ;;
    ?)
       usage;
       exit 1
      ;;
    esac
done
shift $((OPTIND -1))

if (($# != 0))
then
   usage;
    exit
fi

echo Building asset
rm -rf ${RUNDIR}/build
aws-run -p prod -- aws s3 cp --recursive --exclude ".limio-asset-dist" s3://${SHARD}.assets.limio.com/public/${ASSETID} ${RUNDIR}/build  
cd ./build; npm install --ignore-scripts; cd -
yarn build:custom
aws-run -p prod aws s3 cp --recursive ${RUNDIR}/build/.limio-asset-dist/ s3://${SHARD}.assets.limio.com/public/${ASSETID}/.limio-asset-dist