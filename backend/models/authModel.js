const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* ----------------------------- Auth Collection ---------------------------- */

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	regToken: String,
	regTokenExpiration: Date,
	resetToken: String,
	resetTokenExpiration: Date,
	verified: {
		type: Boolean,
		default: false,
		required: true,
	},
	approved: {
		type: Boolean,
		default: false,
		required: false,
	},
	role: { type: String, required: true },
});

module.exports = mongoose.model('Auth', userSchema);
