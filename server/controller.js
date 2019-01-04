const { getAllHelper, getAllFromIdHelper } = require('../database/dbHelper');

const getAll = (req, res) => {
  getAllHelper((data) => {
    console.log('got all reviews!', data);
    res.status(200).send(data);
  });
};

const getAllFromId = (req, res) => {
  const roomId = req.params.id;
  getAllFromIdHelper(roomId, (data) => {
    console.log('got reviews from room', roomId);
    res.status(200).send(data);
  });
};

module.exports = { getAll, getAllFromId };