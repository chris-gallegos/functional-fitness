const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    title: String,
    about: String,
    wotkoutDetails: String,
    difficulyLevel: { 
        type: String,
        enum: ['easy', 'meduim', 'hard']
    }
});



module.exports = mongoose.model('Workout', workoutSchema);