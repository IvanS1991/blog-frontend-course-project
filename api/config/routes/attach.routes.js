const attach = (app, data) => {
  require('./users/').attach(app, data);
  require('./comments/').attach(app, data);
  require('./posts/').attach(app, data);
};

module.exports = { attach };
