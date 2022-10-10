const mongoose = require('mongoose');
require('mongoose-type-url');
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
    url: [
        {
            type: String,
            validate: {
                validator: function (value) {
                    const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
                    const urlRegExp = new RegExp(urlPattern);
                    return value.match(urlRegExp);
            },
                message: props => `${props.value} is not a valid URL`
            }
        }
    ],
    about: String,
    workoutDetails: String,
    difficulyLevel: { 
        type: String,
        enum: ['easy', 'medium', 'hard']
    },
    comments: [commentsSchema]
});


module.exports = mongoose.model('Workout', workoutSchema);