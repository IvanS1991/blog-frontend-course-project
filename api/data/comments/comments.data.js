const { Comment } = require('./comment.model');

const commentsData = (db) => {
  const postsDb = db.collection('posts');

  const create = (author, content, postId) => {
    const comment = new Comment(author, content);
    return new Promise((resolve, reject) => {
      postsDb.updateOne({ id: postId },
        {
          $push: { comments: comment },
        }, (err, result) => {
          if (err) {
            return reject(err);
          }
          return resolve(postId);
        });
    });
  };

  return {
    create,
  };
};

module.exports = commentsData;
