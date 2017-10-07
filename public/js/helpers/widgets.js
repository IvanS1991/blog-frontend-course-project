/* globals $ */

import * as usersController from 'users-controller';
import * as postsController from 'posts-controller';

const classHidden = 'hidden';
const classExpanded = 'expanded';
const classSelected = 'selected';
const classTriggerLink = '.trigger-link';
const classNavLink = '.nav-link';
const classDropdownTrigger = '.trigger-link';
const classHomeLink = 'home-link';
const classDropdownContainer = '.dropdown-container';
const classNavExpand = '.nav-expand';
const classNavContainer = '.nav-container';

const dropDown = () => {
  $(document.body).on('click', (event) => {
    const $this = $(event.target);
    const $trigger = $this.parents(classDropdownContainer).prev();

    const toggleDropdown = () => {
      $(classDropdownContainer).addClass(classHidden);
      $this.parent().next().toggleClass(classHidden);
    };

    $(classDropdownTrigger).removeClass(classSelected);
    if ($this.hasClass(classTriggerLink.slice(1)) && !$this.hasClass(classHomeLink)) {
      $this.addClass(classSelected);
      toggleDropdown();
    }
    if ($this.hasClass(classNavLink.slice(1))) {
      $trigger.children('a').addClass(classSelected);
      toggleDropdown();
      $(classNavContainer).removeClass(classExpanded);
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

const collapsibleNav = () => {
  const containerClass = '.nav-container';

  $(classNavExpand).on('click', () => {
    $(classNavContainer).toggleClass(classExpanded);
  });
};

export { dropDown, collapsibleNav, userNav };
