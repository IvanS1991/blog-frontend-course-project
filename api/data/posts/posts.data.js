const { Post } = require('./post.model');
const { Category } = require('./category.model');

const postsData = (db) => {
  const postsDb = db.collection('posts');
  const categoriesDb = db.collection('categories');

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

  const getAll = (filter, page) => {
    const size = 12;
    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    console.log(filter);

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

  const createCategory = (category) => {
    const filterMain = { categoryName: category.main };
    const categoryData = new Category(category);

    return new Promise((resolve, reject) => {
      categoriesDb.findOne(filterMain, (findErr, match) => {
        if (findErr) {
          return reject(findErr);
        }
        if (match) {
          if (match.sub.indexOf(category.sub) >= 0) {
            return 'Success';
          }
          return categoriesDb.updateOne(filterMain, {
            $push: { sub: category.sub },
          }, (updateErr, result) => {
            if (updateErr) {
              return reject(updateErr);
            }
            return resolve('Success');
          });
        }
        return categoriesDb.insertOne(categoryData, (insertErr, result) => {
          if (insertErr) {
            return reject(insertErr);
          }
          return resolve('Success');
        });
      });
    });
  };

  const getCategories = () => {
    return new Promise((resolve, reject) => {
      categoriesDb.find({})
        .toArray((err, matches) => {
          if (err) {
            return reject(err);
          }
          return resolve(matches);
        });
    });
  };

  return {
    create,
    getOne,
    getAll,
    createCategory,
    getCategories,
  };
};

module.exports = postsData;
