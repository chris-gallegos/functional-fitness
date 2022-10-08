var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts')

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', workoutsCtrl.index);
router.get('/:id', workoutsCtrl.show);


module.exports = router;
