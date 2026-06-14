#!/usr/bin/env bash
set -e
# Build the project and create a release zip suitable for Gumroad
rm -rf dist release
npm run build
mkdir -p release
# include dist (production build), README, LICENSE, and optionally src
cp -r dist release/dist
cp README.md release/README.md
cp LICENSE release/LICENSE
# optional: include source if you want to sell source
cp -r src release/src
zip -r release/saas-landing-template.zip release
echo "Created release/saas-landing-template.zip"
