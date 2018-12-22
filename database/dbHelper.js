const airbenderMock = require('./model');

const getAllHelper = (cb) => {
  airbenderMock.findAll({})
    .then(cb)
    .catch(err => console.error(err));
};

module.exports = { getAllHelper };