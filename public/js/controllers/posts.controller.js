/* globals $ */
import { router, contentContainer } from 'app';
import { postsData } from 'data';
import { templates } from 'templates';

const getAll = () => {
  let postsList;
  postsData.getByCategory('all', 'none', 1)
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
  const page = params.page;
  console.log(category, page);
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
