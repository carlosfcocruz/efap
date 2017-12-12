module.exports = function (app, express) {
  app.use('/static', express.static('public'));
};

