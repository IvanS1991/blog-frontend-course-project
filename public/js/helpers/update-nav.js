/* globals $ */

import * as postsController from 'posts-controller';
import { templates } from 'templates';
import * as app from 'app';
import * as widgets from 'widgets';

const update = () => {
  const containerId = '#nav-main';
  let categoriesList;
  const username = localStorage.getItem('username');
  $('.loading').removeClass('hidden');
  $('.wrapper').addClass('hidden');
  return postsController.getCategories()
    .then((categories) => {
      categoriesList = categories;
      return templates.get('nav-main');
    })
    .then((template) => {
      $(containerId).html(template({
        categoriesList,
        username,
      }));
      widgets.dropDown();
      widgets.userNav();
      app.router.updatePageLinks();
    });
};

const hideLoadingScreen = () => {
  $('.loading').addClass('hidden');
  $('.wrapper').removeClass('hidden');
};

export { update, hideLoadingScreen };
