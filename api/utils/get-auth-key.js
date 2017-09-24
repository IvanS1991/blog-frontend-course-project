const randRange = require('./rand-range');

module.exports = (prefix) => {
  const symbols = `!@#$%^&*()qwertyuiopasdfghjklzxcvbnm{}:"|>?<`;
  let output = prefix;

  for (let i = 0; i < 60 - prefix.length; i += 1) {
    const index = randRange(0, symbols.length);
    output += symbols[index];
  }

  return output;
};
