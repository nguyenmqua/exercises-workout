const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day:{
    $type: Date,
    default: Date.now
  },
  exercises:
    [{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    duration: Number,
    distance: Number
    }],
  // totalDuration: {
  //   $type:Number,
  // }
},{ typeKey: '$type' });

// WorkoutSchema.methods.setTotalDuration = function(){
//  this.totalDuration = 5

//  return this.totalDuration
// };

// WorkoutSchema.methods.setTotalDuration = function(){
//   this.totalDuration = `${this.exercises.duration}`

//   return this.totalDuration
// };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;