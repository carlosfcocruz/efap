const { MONGO_DB } = require('../../config');
const mongoose = require('mongoose');

mongoose.connect(MONGO_DB.URI, {
  useMongoClient: true
});

const db = mongoose.connection;

module.exports = function () {
  db.on('error', function(message) {
    console.error('connection error :: ', message);
  });
  db.once('open', function() {
    console.log('********************\nMONGO_DB IS CONNECTED!\n********************');
  });
};
