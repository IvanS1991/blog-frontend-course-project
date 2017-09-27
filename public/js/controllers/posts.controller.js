import { router } from 'app';
import { postsData } from 'data';
import { templates } from 'templates';

const getAll = () => {
  let result;
  postsData.getByCategory('all', 1)
    .then((response) => {
      result = response;
      console.log(result);
      return templates.get('posts-list');
    })
    .then((template) => {
      console.log(template(result));
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

export {
  getAll,
  getByCategory,
  getById,
};
