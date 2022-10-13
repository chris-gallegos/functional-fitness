var Workout = require('../models/workout')

module.exports = {
    index,
    show,
    new: newWorkout,
    create
}


function index(req, res) {
    Workout.find({}, function(err, workouts) {
        console.log(workouts)
      res.render('workouts/index', { workouts })
    })
}

function show(req, res){
    Workout.findById(req.params.id, function(err, workout) {
        console.log(workout)
        res.render('workouts/show', {title: 'Workout', workout})
    })
}

function newWorkout(req, res){
    res.render('workouts/new')
}

function create(req, res) {
    const workout = new Workout(req.body)
    workout.save(function(err) {
      if (err) return res.redirect('/workouts/new')
      res.redirect(`/workouts/${workout._id}`)
    })
}