const homeHandler = require('../../handlers/homepage');

module.exports = function (app) {
  app.get('/', homeHandler);
};
