const product = require('./products');
const middlewares = require('../middlewares');
const home = require('./home');

module.exports = function (app) {
  middlewares(app);
  home(app);
  product(app);
};
