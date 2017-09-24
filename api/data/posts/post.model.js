const utils = require('../../utils/');

class Post {
  constructor(author, title, content) {
    this.author = author;
    this.title = title;
    this.content = content;
    this.id = utils.getPostId(title);
  }
}

module.exports = { Post };
