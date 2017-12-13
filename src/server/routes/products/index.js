const productRepository = require('../../api/repositories/product');

module.exports = function (app) {
  app.route('/products')
    .get(function (req, res) {
      res.send('List of Products');
    });

  app.route('/products/:id')
    .get(function (req, res) {
      res.send(`Product id :: ${JSON.stringify(req.params, null, 2)}`);
      productRepository.save(req.params);
    });
};
