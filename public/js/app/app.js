import Navigo from 'navigo';

import * as routes from 'routes';
import * as nav from 'update-nav';
import * as handlebarsHelpers from 'handlebars-helpers';

// Main selectors
const contentContainer = '.content';
const paginationContainer = '.pagination';
const loadingElement = '.loading';
const wrapperElement = '.wrapper';

// Router config
const appRoot = 'http://localhost:8000/';
const useHash = true;
const hash = '#!';

// Router init
const router = new Navigo(appRoot, useHash, hash);

const init = () => {
  // Attaching routes to router
  routes.attachTo(router);

  // Attaching custom handlebars helpers
  handlebarsHelpers.attach();

  // Initializing navigation
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
