import Navigo from 'navigo';

import * as routes from 'routes';
import * as nav from 'update-nav';
import * as handlebarsHelpers from 'handlebars-helpers';

const contentContainer = '.content';
const paginationContainer = '.pagination';
const loadingElement = '.loading';
const wrapperElement = '.wrapper';

const appRoot = 'http://localhost:8000/';
const useHash = true;
const hash = '#!';

const router = new Navigo(appRoot, useHash, hash);

const init = () => {
  routes.attachTo(router);

  handlebarsHelpers.attach();

  nav.update()
    .then(nav.hideLoadingScreen);
};

export {
  init,
  contentContainer,
  paginationContainer,
  router,
  loadingElement,
  wrapperElement,
};
