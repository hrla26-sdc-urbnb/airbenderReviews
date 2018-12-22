const { getAllHelper } = require('../database/dbHelper');

const getAll = (req, res) => {
  getAllHelper((data) => {
    console.log('got all reviews!');
    res.status(200).send(data);
  });
};

module.exports = { getAll };