#!/usr/bin/env bash

cd ./packages/
for i in *; do npm run ng test --watch=false "$i" ; done
