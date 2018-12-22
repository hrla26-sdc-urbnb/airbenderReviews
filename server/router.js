const router = require('express').Router();
const { getAll } = require('./controller');

router.route('/reviews')
  .get(getAll);

module.exports = router;
