const { Comment } = require('./comment.model');

const commentsData = (db) => {
  const commentsDb = db.collection('comments');

  const create = (threadId, content) => {

  };

  const rate = (threadId, postId, rating) => {

  };

  return {
    create,
    rate,
  };
};

module.exports = commentsData;
