const { Router } = require('express');

const attach = (app, data) => {
  const router = new Router();
  const postsController = require('./posts.controller')(data);

  router
    .post('/', postsController.create)
    .get('/categories', postsController.getCategories)
    .get('/:postId', postsController.getOne)
    .get('/:category/:subCategory/:page', postsController.getAll);

  app.use('/posts', router);
};

module.exports = { attach };
