const controller = (data) => {
  const create = (req, res, next) => {
    const author = req.user.username;
    const postId = req.body.postId;
    const content = req.body.content;
    data.comments.create(author, content, postId)
      .then((result) => {
        res.status(200)
          .json({
            postId: result,
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  return {
    create,
  };
};

module.exports = controller;
