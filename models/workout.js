const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    title: String,
    about: String,
    workoutDetails: String,
    difficulyLevel: { 
        type: String,
        enum: ['easy', 'medium', 'hard']
    }
});



module.exports = mongoose.model('Workout', workoutSchema);