const { User } = require('./user.model');

const usersData = (db) => {
  const usersDb = db.collection('users');

  const register = (username, passHash, passHashRepeat) => {
    return new Promise((resolve, reject) => {
      if (passHash !== passHashRepeat) {
        return reject(new Error('Passwords must match!'));
      }
      const user = new User(username, passHash);
      return usersDb.findOne({
        usernameLC: user.username.toLowerCase(),
      }, (findErr, match) => {
        if (findErr) {
          return reject(findErr);
        }
        if (match) {
          return reject(new Error('Existing user!'));
        }
        return usersDb.insertOne(user, (insertErr, result) => {
          if (insertErr) {
            return reject(insertErr);
          }
          return resolve({
            username: user.username,
            authKey: user.authKey,
          });
        });
      });
    });
  };

  const login = (username, passHash) => {
    return new Promise((resolve, reject) => {
      usersDb.findOne({
        usernameLC: username.toLowerCase(),
        passHash: passHash,
      }, (err, match) => {
        if (err) {
          return reject(new Error('Wrong username or password!'));
        }
        return resolve({
          username: match.username,
          authKey: match.authKey,
        });
      });
    });
  };

  return {
    register,
    login,
  };
};

module.exports = usersData;
