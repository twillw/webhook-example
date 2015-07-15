#!/bin/bash
cd "$1";
echo "$1";

git fetch --all;
git reset --hard origin/development;

#git pull origin development;

sudo npm install;
sudo bower install --allow-root;
grunt build;

pm2 restart app

exit 0;
