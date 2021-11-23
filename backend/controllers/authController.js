const bcrypt = require('bcryptjs');
// const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const validator = require('express-validator');
const mailgun = require('mailgun-js');

var mg = mailgun({
	apiKey: '28eb8ec2a980f141509ddb5004ac80bc-adf6de59-2513ad49',
	domain: 'programmerviral.tech',
});

const { validationResult } = validator;

const authModel = require('../models/authModel.js');
const statusCodes = require('../utils/httpStatusCodes.js');

const postRegister = asyncHandler(async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		res.status(statusCodes.UNPROCESSSABLE);
		return res.json(errors.array());
	}

	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	var role = req.body.role;

	const userExists = await authModel.findOne({
		$or: [{ email: email }],
	});

	if (userExists) {
		res.status(statusCodes.UNPROCESSSABLE);
		throw new Error('User already registered');
	}

	const hashedPassword = await bcrypt.hash(password, +process.env.SALTS);
	const newAuth = new authModel({
		email,
		password: hashedPassword,
		name,
		role,
	});

	await newAuth.save();

	const data = {
		from: 'placementsabkihogi@test.co',
		to: email,
		subject: 'Hello',
		text: 'Testing some Mailgun awesomness! ',
	};

	const resBody = await mg.messages().send(data);
	console.log(resBody);

	res.status(statusCodes.RESOURCE_CREATED).json({ message: 'User registered' });
});

module.exports = { postRegister };
