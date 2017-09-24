const { Post } = require('./post.model');

const postsData = (db) => {
  const create = (author, title, content) => {

  };

  const rate = (postId, rating) => {

  };

  const getAll = (category, page, size) => {

  };

  return {
    create,
    rate,
    getAll,
  };
};

module.exports = postsData;
