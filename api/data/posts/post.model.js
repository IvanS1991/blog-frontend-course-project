const { Comment } = require('../comments/comment.model');

class Post extends Comment {
  constructor(author, title, content, category) {
    super(author, content);
    this.title = title;
    this.category = category;
    this.id = super.getId(title);
    this.comments = [];
  }
}

module.exports = { Post };
