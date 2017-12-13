const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  active: Boolean,
  comment: String,
  name:  String
});

module.exports = mongoose.model('Product', ProductSchema);
