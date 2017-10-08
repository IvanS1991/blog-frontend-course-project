echo ========================
echo Starting dev server...
echo ========================

./node_modules/.bin/eslint .
./node_modules/.bin/nodemon --watch ./api server.js --verbose