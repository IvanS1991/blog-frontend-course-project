./node_modules/.bin/mocha --reporters
read -p 'Reporter: ' reporter

./node_modules/.bin/mocha --reporter $reporter ./api/test/**/*.tests.js