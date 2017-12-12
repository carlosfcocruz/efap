module.exports = function (app) {
  app.route('/products')
    .get(function (req, res) {
      res.send('Get a random book')
    });

  app.route('/products/:productId')
    .get(function (req, res) {
      res.send('Product id :: ' + JSON.stringify(req.params, null, 2));
    });
};
