/* globals $ */

import * as postsController from 'posts-controller';
import { templates } from 'templates';
import * as app from 'app';

const updateCategories = () => {
  const containerId = '#nav-main';
  let categoriesList;
  return postsController.getCategories()
    .then((categories) => {
      categoriesList = categories;
      return templates.get('nav-main');
    })
    .then((template) => {
      $(containerId).html(template(categoriesList));
      app.router.updatePageLinks();
    });
};

export { updateCategories };
