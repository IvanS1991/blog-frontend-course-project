import * as postsController from 'posts-controller';
import * as error from 'error';

const routes = {
  home: '/home',
  categories: '/categories/:category/:page',
  post: '/posts/:id',
  notFound: '**',
};

const attachTo = (router) => {
  router
    .navigate(`${routes.home}`)
    .on(routes.home, postsController.getAll)
    .on(routes.categories, postsController.getByCategory)
    .on(routes.post, postsController.getById)
    .on(routes.notFound, error.notFound)
    .resolve();
};

export { attachTo };
