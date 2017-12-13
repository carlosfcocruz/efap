const initRoutes = require('../routes/init');
const initDbConnection = require('../api/repositories/init');

module.exports = function (app, express) {
  app.use('/static', express.static('public'));
  initRoutes(app);
  initDbConnection();
};

