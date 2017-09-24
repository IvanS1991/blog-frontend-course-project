const { Router } = require('express');

const attach = (app, data) => {
  const router = new Router();
  const usersController = require('./users.controller')(data);

  router
    .post('/', usersController.register)
    .put('/', usersController.login);

  app.use('/users', router);
};

module.exports = { attach };
