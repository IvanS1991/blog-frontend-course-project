const controller = (data) => {
  const create = (req, res, next) => {
    const author = req.user.username;
    const title = req.body.title;
    const content = req.body.content;
    const main = req.body.category;
    const sub = req.body.subCategory;
    const category = {
      main,
      sub,
    };
    const tags = req.body.tags;

    data.posts.create(author, title, content, category, tags)
      .then((postId) => {
        res.status(200)
          .json({
            postId,
          });
        return data.posts.createCategory(category);
      })
      .catch((err) => {
        next(err);
      });
  };

  const getOne = (req, res, next) => {
    const id = req.params.postId;
    data.posts.getOne(id)
      .then((post) => {
        res.status(200)
          .json({
            post,
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  const getAll = (req, res, next) => {
    const type = req.params.type;
    const category = req.params.category;

    const filter = {};

    if (type === 'main') {
      filter.category = category;
    } else if (type === 'sub') {
      filter.subCategory = category;
    }

    const page = parseInt(req.params.page, 10);
    console.log('here');

    data.posts.getAll(filter, page)
      .then((result) => {
        res.status(200)
          .json({
            count: result.count,
            category: category || 'all',
            posts: result.posts,
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  const getCategories = (req, res, next) => {
    data.posts.getCategories()
      .then((categories) => {
        res.status(200)
          .send(categories);
      });
  };

  return {
    create,
    getOne,
    getAll,
    getCategories,
  };
};

module.exports = controller;
