const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const validator = require('express-validator');
const TokenGenerator = require('uuid-token-generator');

const { sendEmail } = require('../utils/common');

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

	const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
	const regToken = tokgen2.generate();

	const newAuth = new authModel({
		email,
		password: hashedPassword,
		name,
		role,
		regToken,
	});

	const newUser = await newAuth.save();
	sendEmail(
		email,
		'Registration Successfully',
		"Congratulations!! You're registered. Please verify your email ID using link " +
			'http:localhost:8000/api/verify/' +
			newUser._id +
			'/' +
			regToken
	);

	res.status(statusCodes.RESOURCE_CREATED).json({ message: 'User registered' });
});

const postLogin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await authModel.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		if (!user.verified) {
			res.status(statusCodes.BAD_REQUEST);
			throw new Error('Please verify email first');
		}
		const token = jwt.sign(
			{
				email: user.email,
			},
			'jwt token',
			{
				expiresIn: '24h',
			}
		);
		req.session.token = token;
		return req.session.save((err) => {
			res.json({
				name: user.name,
				email: user.email,
				verified: user.verified,
				approved: user.approved,
				role: user.role,
			});
		});
	} else {
		res.status(statusCodes.BAD_REQUEST);
		throw new Error('Invalid credentials');
	}
});

const verifyEmail = asyncHandler(async (req, res) => {
	const { userId, token } = req.params;
	const user = await authModel.findById(userId);
	if (user) {
		if (token === user.regToken) {
			user.verified = true;
			user.regToken = '';
			await user.save();
			res.json({ message: 'Successfully verified!' });
		} else {
			res.status(403);
			throw new Error('Token not valid!');
		}
	} else {
		res.status(403);
		throw new Error('Token not valid!');
	}
});

const getUser = asyncHandler(async (req, res) => {
	res.json(req.user);
});

module.exports = { postRegister, postLogin, getUser, verifyEmail };
