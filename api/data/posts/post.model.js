const utils = require('../../utils/');

class Post {
  constructor(author, title, content, category) {
    this.author = author;
    this.title = title;
    this.content = content;
    this.category = category;
    this.id = utils.getPostId(title);
    this.created = utils.getTime();
    this.comments = [];
    this.rated = [];
  }
}

module.exports = { Post };
