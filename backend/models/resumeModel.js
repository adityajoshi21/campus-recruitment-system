const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
	student: { type: Schema.Types.ObjectId, ref: 'Student' },
	email: {
		type: String,
		required: true,
	},
	personalDetails: {
		name: {
			type: String,
			required: true,
		},
		fatherName: {
			type: String,
			required: true,
		},
		motherName: {
			type: String,
			required: true,
		},
		dob: {
			type: Date,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		nationality: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
	},
	aboutMe: {
		type: String,
		required: true,
	},
	education: [
		{
			title: {
				type: String,
				required: true,
			},
			institute: {
				type: String,
				required: true,
			},
			period: {
				type: String,
				required: true,
			},
			grade: {
				type: String,
				required: true,
			},
		},
	],
	experience: [
		{
			title: {
				type: String,
				required: true,
			},
			company: {
				type: String,
				required: true,
			},
			period: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
		},
	],
	skills: [
		{
			name: {
				type: String,
				required: true,
			},
			percentage: {
				type: String,
				required: true,
			},
		},
	],
	specQualifications: [],
});

module.exports = mongoose.model('Resume', resumeSchema);
