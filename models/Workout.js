const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	type: {
		type: String,
		required: "exercise type is required!"
	},
	name: {
		type: String,
		required: "exercise name is required!"
	},
	duration: {
		type: Number,
		required: "duration of exercise is required!"
	},
	weight: {
		type: Number,
		required: "weight lifted is required!"
	},
	reps: {
		type: Number,
		required: "number of reps is required!"
	},
	sets: {
		type: Number,
		required: "number of sets is required!"
	}
});

const WorkoutSchema = new Schema({
	day: {
			type: Date,
			default: Date.now
	},
	exercises: [ ExerciseSchema ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;