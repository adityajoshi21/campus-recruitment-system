const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currentDate = new Date();

const roundSchema = new Schema({
	title: {
		type: String,
		default: 'Round 1',
		required: true,
	},
	description: {
		type: String,
		default: 'Description',
		required: true,
	},
	startDate: {
		type: Date,
		default: currentDate,
		required: true,
	},
	endDate: {
		type: Date,
		default: new Date(currentDate.getTime() + 86400000),
		required: true,
	},
	status: { type: String, default: 'pending' },
	resultType: { type: String, default: 'round' },
	applicants: [
		{
			student: {
				type: Schema.Types.ObjectId,
				ref: 'Student',
			},
			status: { type: String, required: true, default: 'nonshortlisted' },
		},
	],
	job: { type: Schema.Types.ObjectId, ref: 'Job' },
});

module.exports = mongoose.model('Round', roundSchema);
