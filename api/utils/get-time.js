const getTime = () => {
  const date = new Date();
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
  ];

  const zeroFill = (number) => {
    if (number < 10) {
      return '0' + number;
    }
    return '' + number;
  };

  const parseDay = (number) => {
    let suffix = '';
    if (number % 10 === 1) {
      suffix = 'st';
    } else if (number % 10 === 2) {
      suffix = 'nd';
    } else {
      suffix = 'th';
    }
    return number + suffix;
  };

  const seconds = zeroFill(date.getSeconds());
  const minutes = zeroFill(date.getMinutes());
  const hours = zeroFill(date.getHours());
  const day = parseDay(date.getDate());
  const month = months[date.getMonth()];
  const year = zeroFill(date.getFullYear());

  return `${month} ${day}, ${year} - ${hours}:${minutes}:${seconds}`;
};

module.exports = getTime;
