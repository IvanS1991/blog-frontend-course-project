const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const attach = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan('dev'));
};

module.exports = { attach };
