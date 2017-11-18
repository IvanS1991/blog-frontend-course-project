const constants = require('./api/constants');
const start = new Date();
const process = require('process');

console.log(`Launching API...`);
console.log(`================`);
console.log(`Initializing DB...`);
require('./api/db/').init(constants.DB_STRING)
  .then((db) => {
    console.log(`Initializing data...`);
    return require('./api/data/').init(db);
  })
  .then((data) => {
    console.log(`Initializing app...`);
    return require('./api/config').init(data);
  })
  .then((app) => {
    const total = new Date() - start;
    console.log(`================`);
    console.log(`Launched API in ${total} ms.`);
    console.log(`================`);
    app.listen(process.env.PORT || constants.PORT, () => {
      console.log(`Listening on port: ${constants.PORT}`);
      console.log(`. . . . . . . . . . . .`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
