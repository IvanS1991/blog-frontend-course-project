const { Router } = require('express');
const postsController = require('./posts.controller');

const attach = (app, data) => {
  const router = new Router();

  router
    .post('/', postsController.create)
    .put('/', postsController.rate)
    .get('/:category/:page/:size', postsController.getAll);

  app.use('/posts', router);
};

module.exports = { attach };
