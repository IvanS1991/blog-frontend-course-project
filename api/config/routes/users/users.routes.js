const { Router } = require('express');
const usersController = require('./users.controller');

const attach = (app, data) => {
  const router = new Router();

  router.get('/', (req, res, next) => {
    res.send('OK');
  });

  app.use('/users', router);
};

module.exports = { attach };
