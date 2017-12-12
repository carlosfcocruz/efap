const product = require('./products/index');

module.exports = function (app) {
  product(app);
};
