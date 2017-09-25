const utils = require('../../utils/');

class User {
  constructor(username, passHash) {
    this.username = username;
    this.usernameLC = username.toLowerCase();
    this.passHash = passHash;
    this.authKey = this.getAuthKey(username);
    this.likesReceived = 0;
  }

  getAuthKey(prefix) {
    const symbols = `!@#$%^&*()qwertyuiopasdfghjklzxcvbnm{}:|>?<`;
    let output = prefix;

    for (let i = 0; i < 60 - prefix.length; i += 1) {
      const index = utils.randRange(0, symbols.length);
      output += symbols[index];
    }

    return output;
  }
}

module.exports = { User };
