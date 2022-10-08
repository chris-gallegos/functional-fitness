require('dotenv').config()
require('./config/database')

const Workout = require('./models/workout')

const data = require('./data')

const p1 = Workout.deleteMany({})

Promise.all([p1])
.then(function(result){
    console.log(result)
    return Promise.all([
        Workout.create(data.workouts)
    ])
})
.then(process.exit)
