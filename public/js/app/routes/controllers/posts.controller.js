/* globals $ */
import * as app from 'app';
import { postsData } from 'data';
import { templates } from 'templates';
import * as error from 'error';
import * as nav from 'update-nav';
import * as widgets from 'widgets';

let allPosts = false;
let postsList;
let pageCount;
let category;
let subCategory;

const fetchPostsData = (response) => {
  postsList = response;
  pageCount = Math.ceil(postsList.count / 12);
  category = postsList.category;
  subCategory = postsList.subCategory;
  postsList.posts.forEach((post) => {
      post.content = post.content.slice(0, 100) + '...';
    });
  return templates.get('posts-list');
};

const renderPostsList = (template) => {
  $(app.contentContainer).html(template({
    allPosts,
    category,
    subCategory,
    postsList,
  }));
  return templates.get('pagination');
};

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
      console.log(response);
      response.post.content = response.post.content.split('\n');
      postData.post = response.post;
      postData.commentCount = response.post.comments.length;
      return templates.get('post-details');
    })
    .then((template) => {
      $(app.contentContainer).html(template(postData));
      $(app.paginationContainer).addClass('hidden');
      widgets.commentsNav();
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
