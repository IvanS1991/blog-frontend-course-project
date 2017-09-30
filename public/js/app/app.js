/* globals $ */

import Navigo from 'navigo';

import 'jquery';
import * as routes from 'routes';
import { updateCategories } from 'update-categories';
import { checkLoggedIn } from 'check-logged-in';

const contentContainer = '#content';
const loadingElement = '#loading';
const wrapperElement = '#wrapper';

const appRoot = 'http://localhost:8000/';
const useHash = true;
const hash = '#!';

const router = new Navigo(appRoot, useHash, hash);

const init = () => {
  routes.attachTo(router);

  checkLoggedIn();
  window.addEventListener('hashchange', checkLoggedIn);

  updateCategories()
    .then(() => {
      $('#loading').addClass('hidden');
      $('#wrapper').removeClass('hidden');
    });
};

export {
  init,
  contentContainer,
  router,
  loadingElement,
  wrapperElement,
};
