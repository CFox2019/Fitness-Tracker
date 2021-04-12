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

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;