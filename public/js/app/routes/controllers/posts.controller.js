/* globals $ */
import * as app from 'app';
import { postsData } from 'data';
import { templates } from 'templates';

const getAll = () => {
  let postsList;
  postsData.getByCategory(null, 'all', 1)
    .then((response) => {
      postsList = response;
      postsList.posts.forEach((post) => {
          post.content = post.content.slice(0, 100) + '...';
        });
      return templates.get('posts-list');
    })
    .then((template) => {
      $(app.contentContainer).html(template(postsList));
      app.router.updatePageLinks();
    });
};

const getById = (params) => {
  const id = params.id;
  let post;
  postsData.getById(id)
    .then((response) => {
      post = response;
      return templates.get('post-details');
    })
    .then((template) => {
      $(app.contentContainer).html(template(post));
    });
};

const getByCategory = (params) => {
  const category = params.category;
  const type = params.type;
  const page = params.page;
  let postsList;
  postsData.getByCategory(category, type, page)
    .then((response) => {
      postsList = response;
      postsList.posts.forEach((post) => {
          post.content = post.content.slice(0, 100) + '...';
        });
      return templates.get('posts-list');
    })
    .then((template) => {
      $(app.contentContainer).html(template(postsList));
      app.router.updatePageLinks();
    });
};

const getCategories = () => {
  return postsData.getCategories();
};

export {
  getAll,
  getByCategory,
  getById,
  getCategories,
};
