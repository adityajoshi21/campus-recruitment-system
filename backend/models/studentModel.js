const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* ----------------------------- Student Model ----------------------------- */

const studentSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	studentID: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	contact: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		default: 'defaultUser.png',
	},
	degree: {
		type: String,
		required: true,
	},
	cpi: {
		type: Number,
		required: true,
	},
	dob: {
		type: Date,
	},
	gender: {
		type: String,
		maxLength: 1,
	},
	result10: {
		type: Number,
	},
	result12: {
		type: Number,
	},
	backlogs: {
		type: Number,
		max: 99,
	},
	registeringFor: {
		type: String,
	},
	resume: { type: Schema.Types.ObjectId, ref: 'Resume' },
});

module.exports = mongoose.model('Student', studentSchema);
