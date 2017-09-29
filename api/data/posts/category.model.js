class Category {
  constructor(category) {
    this.categoryName = category.main;
    this.sub = [
      category.sub,
    ];
  }
}

module.exports = { Category };
