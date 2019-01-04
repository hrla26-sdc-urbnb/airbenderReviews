const router = require('express').Router();
const { getAll, getAllFromId } = require('./controller');

router.route('/reviews')
  .get(getAll);
router.route('/reviews/:id')
  .get(getAllFromId);


module.exports = router;
