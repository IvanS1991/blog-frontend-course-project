class Comment {
  constructor(author, content, id) {
    this.author = author;
    this.content = content;
    this.id = id;
    this.ratingCount = 0;
    this.ratingSum = 0;
  }
}

module.exports = { Comment };
