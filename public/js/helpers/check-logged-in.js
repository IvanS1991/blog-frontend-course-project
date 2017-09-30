/* globals $ */

import { templates } from 'templates';
import * as app from 'app';

const checkLoggedIn = () => {
  const containerId = '#nav-log-in';
  const username = localStorage.getItem('username');
  templates.get('nav-log-in')
    .then((template) => {
      $(containerId).html(template({ username }));
    });
};

export { checkLoggedIn };
