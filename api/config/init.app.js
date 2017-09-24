const express = require('express');
const app = express();
const utils = require('../utils/');

const init = (data) => {
  require('./static/').attach(app);
  require('./middlewares/').attach(app, data);
  require('./routes/').attach(app, data);

  app.use(utils.resErr);
  return app;
};

module.exports = { init };
