const router = require('express').Router();
const { getAllFromId, postOne, deleteOne, updateOne } = require('./controller.js');

router.route('/reviews')
//   .get(getAll)
  .post(postOne)
router.route('/reviews/:id')
  .get(getAllFromId)
  .delete(deleteOne)
  .put(updateOne)


module.exports = router;
