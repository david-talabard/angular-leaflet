#!/usr/bin/env bash
PACKAGES=("leaflet-map")

for PKG in "${PACKAGES[@]}";
  do
    npm run build -- "$PKG" --prod
done
