/* globals $ */

import * as usersController from 'users-controller';

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
  $(userNavSelector).on('click', (event) => {
    const $this = $(event.target);
    if ($this.attr('id') === btnLogin) {
      usersController.login();
    } else if ($this.attr('id') === btnRegister) {
      usersController.register();
    }
  });
};

const tabList = (selector) => {

};

export { dropDown, tabList, userNav };
