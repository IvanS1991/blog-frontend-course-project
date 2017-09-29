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

    data.posts.create(author, title, content, category)
      .then((postId) => {
        res.status(200)
          .json({
            postId,
          });
        return data.posts.createCategory(category);
      })
      .then((result) => {
        console.log(result);
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
    const mainCategory = req.params.category;
    const subCategory = req.params.subCategory;
    const category = {};
    if (mainCategory !== 'all') {
      category.category = mainCategory;
      if (subCategory !== 'none') {
        category.subCategory = subCategory;
      }
    }

    const page = parseInt(req.params.page, 10);

    data.posts.getAll(category, page)
      .then((posts) => {
        res.status(200)
          .json({
            count: posts.length,
            posts,
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
