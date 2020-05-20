#!/bin/bash
echo 'Running package...'
npm install --save

echo 'Running migration...'
npx sequelize-cli db:migration


echo 'Starting app...'
npm start
