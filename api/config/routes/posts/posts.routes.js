const { Router } = require('express');

const attach = (app, data) => {
  const router = new Router();
  const postsController = require('./posts.controller')(data);

  router
    .post('/', postsController.create)
    .get('/categories', postsController.getCategories)
    .get('/all/:page', postsController.getAll)
    .get('/:postId', postsController.getOne)
    .get('/:type/:category/:page', postsController.getAll);

  app.use('/posts', router);
};

module.exports = { attach };
