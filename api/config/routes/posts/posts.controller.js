const controller = (data) => {
  const create = (req, res, next) => {
    const author = req.user.username;
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;

    data.posts.create(author, title, content, category)
      .then((postId) => {
        res.status(200)
          .json({
            postId,
          });
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
    const category = req.params.category;
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

  return {
    create,
    getOne,
    getAll,
  };
};

module.exports = controller;
