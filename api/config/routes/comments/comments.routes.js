const { Router } = require('express');
const commentsController = require('./comments.controller');

const attach = (app, data) => {
  const router = new Router();

  app.use('/comments', router);
};

module.exports = { attach };
