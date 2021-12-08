#!/bin/bash

cd ${HOME}/yian.dev
git pull
npm i
npm run build
pm2 restart yian.dev
