const { MongoClient } = require('mongodb');

const init = (dbString) => {
  return MongoClient.connect(dbString)
    .then((db) => {
      return db;
    });
};

module.exports = { init };
