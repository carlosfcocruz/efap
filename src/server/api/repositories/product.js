module.exports.create = function create(data) {
  console.log('create :: ', data);
};

module.exports.update = function create(data) {
  console.log('update :: ', data);
};

module.exports.save = function save(data) {
  if (data.id) {
    return this.update(data);
  }

  return this.create(data);
};
