const { Comment } = require('../comments/comment.model');

class Post extends Comment {
  constructor(author, title, content, category, tags) {
    super(author, content);
    this.title = title;
    this.category = category.main;
    this.subCategory = category.sub;
    this.id = super.getId(title);
    this.comments = [];
    this.tags = tags;
  }
}

module.exports = { Post };
