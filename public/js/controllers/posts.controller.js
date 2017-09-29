/* globals $ */
import { router, contentContainer } from 'app';
import { postsData } from 'data';
import { templates } from 'templates';

const getAll = () => {
  let postsList;
  postsData.getByCategory(null, 'all', 1)
    .then((response) => {
      postsList = response;
      return templates.get('posts-list');
    })
    .then((template) => {
      $(contentContainer).html(template(postsList));
    });
};

const getById = (params) => {
  const id = params.id;
  console.log(id);
};

const getByCategory = (params) => {
  const category = params.category;
  const type = params.type;
  const page = params.page;
  postsData.getByCategory(category, type, page)
    .then((posts) => {
      console.log(posts);
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
