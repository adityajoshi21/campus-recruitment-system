const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* ----------------------------- Admin Collection ---------------------------- */

const adminSchema = new Schema({
	email: {
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
});

module.exports = mongoose.model('Admin', adminSchema);
