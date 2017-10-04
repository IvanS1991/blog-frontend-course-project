/* globals $ */
import * as app from 'app';
import { postsData } from 'data';
import { templates } from 'templates';
import * as error from 'error';
import * as nav from 'update-nav';

const createPost = () => {
  const postData = {
    title: $('#tb-post-title').val(),
    content: $('#tb-post-content').val(),
    category: $('#tb-post-category').val(),
    subCategory: $('#tb-post-subCategory').val(),
  };

  let postId;

  return postsData.post(postData)
    .then((response) => {
      postId = response.postId;
    })
    .then(nav.update)
    .then(nav.hideLoadingScreen)
    .then(() => {
      const postUrl = `/posts/${postId}`;
      app.router.navigate(postUrl);
    })
    .catch(error.handle);
};

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
  createPost,
  getAll,
  getByCategory,
  getById,
  getCategories,
};
