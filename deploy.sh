#!/bin/bash

cd ${HOME}/yian.dev
git checkout .
git pull
npm i --no-save
npm run build
pm2 reload yian.dev
