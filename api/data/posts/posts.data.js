const { Post } = require('./post.model');

const postsData = (db) => {
  const postsDb = db.collection('posts');

  const create = (author, title, content, category) => {
    const post = new Post(author, title, content, category);
    return new Promise((resolve, reject) => {
      postsDb.insertOne(post, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(post.id);
      });
    });
  };

  const getOne = (id) => {
    return new Promise((resolve, reject) => {
      postsDb.findOne({ id }, (err, match) => {
        if (err) {
          return reject(err);
        }
        return resolve(match);
      });
    });
  };

  const getAll = (category, page) => {
    const filter = {};

    if (category !== 'all') {
      filter.category = category;
    }

    const size = 12;
    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    return new Promise((resolve, reject) => {
      postsDb.find(filter)
        .toArray((err, matches) => {
          if (err) {
            return reject(err);
          }
          if (!matches.length) {
            return reject(new Error(`There are no posts in this category!`));
          }
          return resolve(matches.slice(startIndex, endIndex));
        });
    });
  };

  return {
    create,
    getOne,
    getAll,
  };
};

module.exports = postsData;
