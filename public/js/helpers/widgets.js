/* globals $, toastr */

import * as usersController from 'users-controller';
import * as postsController from 'posts-controller';
import * as commentsController from 'comments-controller';

const classHidden = 'hidden';
const classExpanded = 'expanded';
const classSelected = 'selected';
const classActive = 'active';
const classTriggerLink = '.trigger-link';
const classNavLink = '.nav-link';
const classDropdownTrigger = '.trigger-link';
const classCategoriesTrigger = '.category-controls-trigger';
const classCategoriesContainer = '.category-controls-container';
const classHomeLink = 'home-link';
const classDropdown = '.dropdown';
const classDropdownContainer = '.dropdown-container';
const classNavExpand = '.nav-expand';
const classNavContainer = '.nav-container';

const dropDown = () => {
  $(classDropdown)
    .on('mouseover', classDropdownTrigger, (event) => {
      console.log('here');
      const $this = $(event.target);
      $(classDropdownTrigger).removeClass(classActive);
      $this.addClass(classActive);
      $(classDropdownContainer).addClass(classHidden);
      $this.parent().next().removeClass(classHidden);
    })
    .on('mouseleave', () => {
      $(classDropdownContainer).addClass(classHidden);
    });

  $(classDropdown)
    .on('mouseover', classNavLink, (event) => {
      $('span').removeClass('red');
      $(event.target).children('span').addClass('red');
    })
    .on('mouseleave', classNavLink, (event) => {
      $('span').removeClass('red');
    });

  $('.user-nav-link').on('click', classTriggerLink, () => {
    $(classCategoriesContainer).removeClass(classExpanded);
  });

  $(window).on('hashchange', (event) => {
    const $this = $(event.target);
    $(classNavContainer).removeClass(classExpanded);
    $(classDropdownContainer).addClass(classHidden);
    $(classCategoriesContainer).removeClass(classExpanded);
  });

  $(classCategoriesTrigger).on('click', (event) => {
    $(classCategoriesContainer).addClass(classExpanded);
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

const commentsNav = () => {
  $('#btn-comment-create').on('click', () => {
    const commentData = {
      postId: $('#comment-form').attr('data-post-id'),
      content: $('#tb-comment-content').val(),
    };
    if (!commentData.postId || !commentData.content) {
      return toastr.error('Comment data cannot be empty!');
    }
    return commentsController.createComment(commentData)
      .then((response) => {
        toastr.success('Successfuly created comment!');
        const params = {
          id: response.postId,
        };
        postsController.getById(params);
      })
      .catch((err) => {
        toastr.error(err);
      });
  });
};

const collapsibleNav = () => {
  $(classNavExpand).on('click', () => {
    $(classNavContainer).toggleClass(classExpanded);
  });
};

export { dropDown, collapsibleNav, userNav, commentsNav };
