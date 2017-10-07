import { commentsData } from 'data';

const createComment = (commentData) => {
  return commentsData.post(commentData);
};

export { createComment };
