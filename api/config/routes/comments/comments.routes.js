const { Router } = require('express');

const attach = (app, data) => {
  const router = new Router();
  const commentsController = require('./comments.controller')(data);

  router
    .post('/', commentsController.create);

  app.use('/comments', router);
};

module.exports = { attach };
