const { getAllHelper, getAllFromIdHelper, postOneHelper, updateOneHelper, deleteOneHelper } = require('../database/dbHelper');
// const airbendermock = require('../database/model.js');


const getAll = (req, res) => {
  getAllHelper((data) => {
    console.log('got all reviews!', data);
    res.status(200).send(data);
  });
};

const getAllFromId = (req, res) => {
  const roomId = req.params.id;
  getAllFromIdHelper(roomId, (err, data) => {
    if(err) {
      console.log(err)
      res.status(404).send(err)
    }
    res.status(200).send(data);
  });
};

const postOne = (req, res) => {
  postOneHelper(req.body,
    (err, data) => {
    if(err) {
      console.log(err)
      res.status(404).send(err)
    }
    console.log('its posted!');
    res.status(200).send(data);
  });
}

const deleteOne = (req, res) => {
  const deleteId = req.params.id;
  deleteOneHelper(deleteId, (err, data) => {
    if(err) {
      console.log(err)
      res.status(404).send(err)
    }
    console.log('its posted!');
    res.status(200).send(data);
  });
}
const updateOne = (req, res) => {
  const updateId = req.params.id;
  updateOneHelper(req.body, updateId, (err, data) => {
    if(err) {
      console.log(err)
      res.status(404).send(err)
    }
    console.log('its posted!');
    res.status(200).send(data);
  });
}

module.exports = { getAll, getAllFromId, postOne, deleteOne, updateOne };