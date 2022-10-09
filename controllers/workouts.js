var Workout = require('../models/workout');

module.exports = {
    index,
    show
}


function index(req, res) {
    Workout.find({}, function(err, workouts) {
        console.log(workouts)
      res.render('workouts/index', { workouts });
    });
    
}

function show(req, res){
    Workout.findById(req.params.id, function(err, workout) {
        console.log(workout)
        res.render('workouts/show', {title: 'Workout', workout})
    })
}