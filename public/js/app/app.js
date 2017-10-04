/* globals $ */

import Navigo from 'navigo';

import * as routes from 'routes';
import * as nav from 'update-nav';

const contentContainer = '#content';
const loadingElement = '#loading';
const wrapperElement = '#wrapper';

const appRoot = 'http://localhost:8000/';
const useHash = true;
const hash = '#!';

const router = new Navigo(appRoot, useHash, hash);

const init = () => {
  routes.attachTo(router);

  nav.update()
    .then(nav.hideLoadingScreen);
};

export {
  init,
  contentContainer,
  router,
  loadingElement,
  wrapperElement,
};
