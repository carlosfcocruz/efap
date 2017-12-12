const initRoutes = require('../routes/init');

module.exports = function (app, express) {
  app.use('/static', express.static('public'));
  initRoutes(app);
};

