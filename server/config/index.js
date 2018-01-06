module.exports = {
  MONGO_DB: {
    URI: process.env.MONGO_DB_URI || 'mongodb://localhost/test'
  },
  NODE_PORT: process.env.NODE_PORT || 3000
};
