import Navigo from 'navigo';

import 'jquery';

import { homeController } from 'home-controller';
import { usersController } from 'users-controller';
import { postsController } from 'posts-controller';
import { commentsController } from 'comments-controller';

const appRoot = 'http://localhost:8000/';
const useHash = true;
const hash = '#!';

const routes = {
  home: '/home',
  users: '/users',
  posts: '/posts',
  comments: '/comments',
};

const router = new Navigo(appRoot, useHash, hash);

router
  .navigate(`${hash}${routes.home}`)
  .on(routes.home, homeController.render)
  .on(routes.users, usersController.render)
  .on(routes.posts, postsController.render)
  .on(routes.comments, commentsController.render)
  .resolve();

const check = () => {
  $('#nav-log-in').html('works');
};

check()
window.addEventListener('hashchange', check);

export { router };
