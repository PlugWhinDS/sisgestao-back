#!/bin/bash
echo 'Running package...'
npm install --save

echo 'Running migration...'
npx sequelize-cli db:migrate

echo 'Running seeders...'
npx sequelize-cli db:seed:all




echo 'Starting app...'
npm start
