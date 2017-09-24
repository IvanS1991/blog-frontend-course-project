const express = require('express');

const attach = (app) => {
  app.use('/', express.static('public'));
  app.use('/lib', express.static('node_modules'));
};

module.exports = { attach };
