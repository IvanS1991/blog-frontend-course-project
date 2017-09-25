const { Router } = require('express');

const attach = (app, data) => {
  const router = new Router();
  const postsController = require('./posts.controller')(data);

  router
    .post('/', postsController.create)
    .put('/', postsController.rate)
    .get('/:postId', postsController.getOne)
    .get('/:category/:page', postsController.getAll);

  app.use('/posts', router);
};

module.exports = { attach };
