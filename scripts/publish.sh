#!/usr/bin/env bash
PACKAGES=("leaflet-map")
PACKAGE_VERSION=$(awk -F\" '/"version":/ {print $4}' package.json)
PACKAGE_TAG="v$PACKAGE_VERSION"

for PKG in "${PACKAGES[@]}";
  do
    echo $(sed -e "s/\$PACKAGE_VERSION/$PACKAGE_VERSION/" "./dist/$PKG/package.json") > "./dist/$PKG/package.json"

    cd "./dist/$PKG"

    npm pack
    npm publish --registry $1
    cd "../.."
done
