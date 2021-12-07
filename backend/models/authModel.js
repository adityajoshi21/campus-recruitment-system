const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

/* ----------------------------- Auth Collection ---------------------------- */

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
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

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Auth', userSchema);
