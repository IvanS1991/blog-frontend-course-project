const controller = (data) => {
  const register = (req, res, next) => {
    const username = req.body.username;
    const passHash = req.body.passHash;
    const passHashRepeat = passHash;

    return data.users.register(username, passHash, passHashRepeat)
      .then((user) => {
        res.status(200)
          .send(user);
      })
      .catch((err) => {
        next(err);
      });
  };

  const login = (req, res, next) => {
    const username = req.body.username;
    const passHash = req.body.passHash;

    data.users.login(username, passHash)
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        next(err);
      });
  };

  return {
    register,
    login,
  };
};

module.exports = controller;
