const utils = require('../../utils/');

class User {
  constructor(username, passHash) {
    this.username = username;
    this.usernameLC = username.toLowerCase();
    this.passHash = passHash;
    this.authKey = utils.getAuthKey(username);
    this.likesReceived = 0;
  }
}

module.exports = { User };
