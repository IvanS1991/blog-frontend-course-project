const init = (db) => {
  return {
    users: require('./users/')(db),
    comments: require('./comments/')(db),
    posts: require('./posts')(db),
  };
};

module.exports = { init };
