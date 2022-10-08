const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;


const commentsSchema = new Schema({
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})


const workoutSchema = new Schema ({
    title: String,
    about: String,
    workoutDetails: String,
    difficulyLevel: { 
        type: String,
        enum: ['easy', 'medium', 'hard']
    },
    comments: [commentsSchema]
});



module.exports = mongoose.model('Workout', workoutSchema);