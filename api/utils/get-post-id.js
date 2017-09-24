const randRange = require('./rand-range');

module.exports = (title) => {
  const pattern = /[^a-zA-Z0-9-]/ig;
  const number = randRange(0, 10000);
  title = title
    .toLowerCase()
    .trim()
    .split(/\s+/g)
    .join('-')
    .replace(pattern, '');
  return `${number}-${title}`;
};
