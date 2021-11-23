const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* ----------------------------- Company Model ----------------------------- */

const companySchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	companyID: {
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
	description: {
		type: String,
		required: true,
	},
	established: {
		type: Date,
	},
	location: {
		type: String,
	},
});

module.exports = mongoose.model('Company', companySchema);
