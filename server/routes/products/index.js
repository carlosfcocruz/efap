module.exports = function (app) {
  app.route('/products')
    .get(function (req, res) {
      res.send('List of Products');
    });

  app.route('/products/:id')
    .get(function (req, res) {
      res.send(`Product id :: ${JSON.stringify(req.params, null, 2)}`);
    });
};
