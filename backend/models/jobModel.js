const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
	company: { type: Schema.Types.ObjectId, ref: 'Company' },
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
		required: true,
	},
	bondDetails: {
		type: String,
	},
	openFor: [],
	gender: {
		type: String,
		maxLength: 1,
	},
	location: {
		type: String,
		required: true,
	},
	package: {
		type: String,
		required: true,
	},
	criteria: {
		type: Number,
		required: true,
	},
	offerType: {
		type: String,
		required: true,
	},
	responsibility: {
		type: String,
	},
	category: {
		type: String,
		required: true,
	},
	files: [],
	rounds: [
		{
			details: { type: Schema.Types.ObjectId, ref: 'Round' },
			order: { type: Number, default: 1 },
			status: { type: String, default: 'pending' },
		},
	],
});

module.exports = mongoose.model('Job', jobSchema);
