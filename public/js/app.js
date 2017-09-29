/* globals $ */

import Navigo from 'navigo';

import 'jquery';
import * as postsController from 'posts-controller';
import * as routes from 'routes';
import { templates } from 'templates';

const appRoot = 'http://localhost:8000/';
const useHash = true;
const hash = '#!';

const router = new Navigo(appRoot, useHash, hash);

routes.attachTo(router);

const contentContainer = '#content';

const checkLoggedIn = () => {
  const containerId = '#nav-log-in';
  const username = localStorage.getItem('username');
  templates.get('nav-log-in')
    .then((template) => {
      $(containerId).html(template({ username }));
    });
};

checkLoggedIn();
window.addEventListener('hashchange', checkLoggedIn);

const updateCategories = () => {
  const containerId = '#nav-main';
  let categoriesList;
  postsController.getCategories()
    .then((categories) => {
      categoriesList = categories;
      return templates.get('nav-main');
    })
    .then((template) => {
      $(containerId).html(template(categoriesList));
    });
};

updateCategories();

export {
  router,
  checkLoggedIn,
  updateCategories,
  contentContainer,
};
