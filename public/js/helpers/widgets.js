/* globals $ */

import * as usersController from 'users-controller';
import * as postsController from 'posts-controller';

const dropDown = () => {
  const triggerSelector = '.trigger-link';
  const containerSelector = '.dropdown-container';
  const classSelected = 'selected';
  const classHidden = 'hidden';

  $(document.body).on('click', (event) => {
    const $this = $(event.target);
    const $trigger = $this.parents(containerSelector).prev();
    $(triggerSelector).removeClass(classSelected);
    if ($this.hasClass('trigger-link')) {
      $this.addClass(classSelected);
    }
    if ($this.hasClass('nav-link') || !$this.hasClass('user-input')) {
      $trigger.children('a').addClass(classSelected);
      $(containerSelector).addClass(classHidden);
      $this.parent().next().removeClass(classHidden);
    }
  });
};

const userNav = () => {
  const userNavSelector = '.user-nav';
  const btnLogin = 'btn-login';
  const btnRegister = 'btn-register';
  const btnLogout = 'btn-logout';
  const btnCreatePost = 'btn-post-create';
  $(userNavSelector).on('click', (event) => {
    const $this = $(event.target);
    const $id = $this.attr('id');
    if ($id === btnLogin) {
      usersController.login();
    } else if ($id === btnRegister) {
      usersController.register();
    } else if ($id === btnLogout) {
      usersController.logout();
    } else if ($id === btnCreatePost) {
      postsController.createPost();
    }
  });
};

const tabList = (selector) => {

};

export { dropDown, tabList, userNav };
