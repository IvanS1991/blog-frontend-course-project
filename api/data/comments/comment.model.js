const utils = require('../../utils/');

class Comment {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.id = this.getId('post');
    this.created = utils.getTime();
  }

  getId(suffix) {
    const pattern = /[^a-zA-Z0-9-]/ig;
    const number = utils.randRange(0, 10000);
    suffix = suffix
      .toLowerCase()
      .trim()
      .split(/\s+/g)
      .join('-')
      .replace(pattern, '');
    return `${number}-${suffix}`;
  }
}

module.exports = { Comment };
