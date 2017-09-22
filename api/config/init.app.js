const express = require('express');
const app = express();

const init = (data) => {
  require('./routes/').attach(app, data);
  require('./middlewares/').attach(app, data);

  return app;
};

module.exports = { init };
