#!/bin/bash

# This script should be run while PWD is the root of the project

npm install -g sequelize-cli
node ./scripts/migration/heroku_create_config.js
sequelize db:migrate --env production --config heroku_config.json
rm heroku_config.json