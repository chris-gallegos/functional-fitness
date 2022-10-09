const workout = require('../models/workout');
const Workout = require('../models/workout');

module.exports = {
    create,
    delete: deleteComment,
    edit,
    update
}

function create(req, res) {
    Workout.findById(req.params.id, function(err, workout) {
        req.body.user = req.user._id
        req.body.userName = req.user.name 
        req.body.userAvatar = req.user.avatar 
        workout.comments.push(req.body)
        workout.save(function(err) {
            res.redirect(`/workouts/${workout._id}`)
        })
    })
}

function deleteComment(req, res, next) {
    Workout.findOne({'comments._id': req.params.id, 'comments.user': req.user._id}).then(function(workout) {
        if (!workout) return res.redirect('/workouts')
        workout.comments.remove(req.params.id)
        workout.save().then(function() {
            res.redirect(`/workouts/${workout._id}`)
        }).catch(function(err) {
            return next(err)
        })
    })
}

function edit(req, res) {
    Workout.findOne({'comments._id': req.params.id}, function(err, workout) {
      const comment = workout.comments.id(req.params.id);
      res.render('comments/edit', {comment});
    });
}
  
function update(req, res) {
    Workout.findOne({'comments._id': req.params.id}, function(err, workout) {
     const commentSubdoc = workout.comments.id(req.params.id); 
     if (!commentSubdoc.user.equals(req.user._id) ) 
     return res.redirect(`/workouts/${workout._id}`);
     commentSubdoc.content = req.body.text
     workout.save(function(err) {
      res.redirect(`/workouts/${workout._id}`);
    });
  });
}
