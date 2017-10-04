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

const getAll = (params) => {
  params = params || {};
  const page = params.page || 1;
  const allPosts = true;
  let postsList;
  let pageCount;
  let category;
  postsData.getByCategory(null, 'all', page)
    .then((response) => {
      postsList = response;
      pageCount = Math.ceil(postsList.count / 12);
      category = postsList.category;
      postsList.posts.forEach((post) => {
          post.content = post.content.slice(0, 100) + '...';
        });
      return templates.get('posts-list');
    })
    .then((template) => {
      $(app.contentContainer).html(template(postsList));
      return templates.get('pagination');
    })
    .then((template) => {
      $(app.paginationContainer).html(template({
        pageCount,
        category,
        allPosts,
      }));
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
  let pageCount;
  postsData.getByCategory(category, type, page)
    .then((response) => {
      postsList = response;
      pageCount = Math.ceil(postsList.count / 12);
      postsList.posts.forEach((post) => {
          post.content = post.content.slice(0, 100) + '...';
        });
      return templates.get('posts-list');
    })
    .then((template) => {
      $(app.contentContainer).html(template(postsList));
      return templates.get('pagination');
    })
    .then((template) => {
      $(app.paginationContainer).html(template({
        pageCount,
        category,
      }));
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
