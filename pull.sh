#!/bin/bash
cd "$1";

git fetch --all;
#git reset --hard origin/master;

git pull origin master;

npm install;
bower install;
# grunt build;

exit 0;
