var express = require('express');
var router = express.Router();

const workoutsCtrl = require('../controllers/workouts')
const isLoggedIn = require('../config/auth')
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', workoutsCtrl.index);
router.get('/new', isLoggedIn, workoutsCtrl.new);
router.get('/:id', workoutsCtrl.show);
router.post('/', isLoggedIn, workoutsCtrl.create);


module.exports = router;
