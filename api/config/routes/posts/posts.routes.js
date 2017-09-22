const { Router } = require('express');
const postsController = require('./posts.controller');

const attach = (app, data) => {
  const router = new Router();

  app.use('/posts', router);
};

module.exports = { attach };
