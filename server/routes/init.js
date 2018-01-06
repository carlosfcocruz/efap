const product = require('./products/index');
const middlewares = require('../middlewares/index');
const home = require('./home/index');

module.exports = function (app) {
  middlewares(app);
  home(app);
  product(app);
};
