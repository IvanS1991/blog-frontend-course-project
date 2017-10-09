/* globals $, toastr */
import * as app from 'app';
import { postsData } from 'data';
import { templates } from 'templates';
import * as nav from 'update-nav';
import * as widgets from 'widgets';
import * as error from 'error';

let allPosts = false;
let postsList;
let pageCount;
let category;
let subCategory;

// Fetches posts from DB, fetches template for post list
const fetchPostsData = (response) => {
  postsList = response;
  pageCount = Math.ceil(postsList.count / 12);
  category = postsList.category;
  subCategory = postsList.subCategory;
  postsList.posts.forEach((post) => {
      if (post.content.length > 100) {
        post.content = post.content.slice(0, 100) + '...';
      }
      if (post.title.length > 25) {
        post.title = post.title.slice(0, 25) + '...';
      }
    });
  return templates.get('posts-list');
};

// Renders post list, fetches template for pagination
const renderPostsList = (template) => {
  $(app.contentContainer).html(template({
    allPosts,
    category,
    subCategory,
    postsList,
  }));
  return templates.get('pagination');
};

// Renders pagination
const renderPagination = (template) => {
  $(app.paginationContainer).html(template({
    pageCount,
    category,
    allPosts,
  }));
  allPosts = false;
  window.scrollTo(0, 0);
  $('.pagination').removeClass('hidden');
  app.router.updatePageLinks();
};

const createPost = () => {
  const postData = {
    title: $('#tb-post-title').val(),
    content: $('#tb-post-content').val(),
    category: $('#tb-post-category').val(),
    subCategory: $('#tb-post-subCategory').val(),
  };
  if (!postData.title
    || !postData.content
    || !postData.category
    || !postData.subCategory) {
    return toastr.error('Post data cannot be empty!');
  }

  let postId;

  return postsData.post(postData)
    .then((response) => {
      postId = response.postId;
    })
    .then(nav.update)
    .then(nav.hideLoadingScreen)
    .then(() => {
      toastr.success('Successfuly created post!');
      const postUrl = `/posts/${postId}`;
      app.router.navigate(postUrl);
    })
    .catch(error.handle);
};

const getAll = (params) => {
  params = params || {};
  const page = params.page || 1;
  allPosts = true;
  postsData.getByCategory(null, 'all', page)
    .then(fetchPostsData)
    .then(renderPostsList)
    .then(renderPagination);
};

const getById = (params) => {
  const id = params.id;
  const postData = {};
  postsData.getById(id)
    .then((response) => {
      response.post.content = response.post.content.split('\n');
      postData.post = response.post;
      postData.commentCount = response.post.comments.length;
      return templates.get('post-details');
    })
    .then((template) => {
      $(app.contentContainer).html(template(postData));
      $(app.paginationContainer).addClass('hidden');
      widgets.commentsNav();
      window.scrollTo(0, 0);
      app.router.updatePageLinks();
    });
};

const getByCategory = (params) => {
  const postsCategory = params.category;
  const type = params.type;
  const page = params.page;
  postsData.getByCategory(postsCategory, type, page)
    .then(fetchPostsData)
    .then(renderPostsList)
    .then(renderPagination);
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
