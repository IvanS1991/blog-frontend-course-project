/* globals $ */

import Navigo from 'navigo';

import 'jquery';

import * as postsController from 'posts-controller';
import * as error from 'error';

const appRoot = 'http://localhost:8000/';
const useHash = true;
const hash = '#!';

const routes = {
  home: '/home',
  categories: '/categories/:category/:page',
  post: '/posts/:id',
  notFound: '**',
};

const router = new Navigo(appRoot, useHash, hash);

router
  .navigate(`${hash}${routes.home}`)
  .on(routes.home, postsController.getAll)
  .on(routes.categories, postsController.getByCategory)
  .on(routes.post, postsController.getById)
  .on(routes.notFound, error.notFound)
  .resolve();

const checkLoggedIn = () => {
  $('#nav-log-in').html('works');
};

checkLoggedIn();
window.addEventListener('hashchange', checkLoggedIn);

export {
  router,
  checkLoggedIn,
};
