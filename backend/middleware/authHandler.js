const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const authModel = require('../models/authModel');

const statusCodes = require('../utils/httpStatusCodes.js');

const isAuth = asyncHandler(async (req, res, next) => {
	try {
		const token = req.session.token;
		if (token) {
			const decode = await jwt.verify(token, process.env.JWT_TOKEN);

			const user = await authModel.findOne(
				{ email: decode.email },
				{ email: 1, role: 1, _id: 1 }
			);
			if (!user) {
				res.status(statusCodes.UNAUTHORISED);
				throw new Error('Please Log In');
			} else {
				req.user = user;
				req.token = token;
				next();
			}
		} else {
			res.status(statusCodes.UNAUTHORISED);
			throw new Error('Please Log In');
		}
	} catch (e) {
		res.status(statusCodes.UNAUTHORISED);
		throw new Error('Please Log In');
	}
});

const isNotAuth = asyncHandler(async (req, res, next) => {
	try {
		const token = req.session.token;
		if (token) {
			const decode = await jwt.verify(token, process.env.JWT_TOKEN);

			const user = await authModel.findOne({ email: decode.email });
			if (!user) {
				next();
			} else {
				req.user = user;
				req.token = token;
				res.redirect('/');
			}
		} else {
			next();
		}
	} catch (e) {
		console.log(e);
		next();
	}
});

const isCompany = asyncHandler(async (req, res, next) => {
	if (req.user.role == 'Company') {
		next();
	} else {
		res.status(statusCodes.UNAUTHORISED);
		throw new Error("You can't access this!");
	}
});

const isStudent = asyncHandler(async (req, res, next) => {
	if (req.user.role == 'Student') {
		next();
	} else {
		res.status(statusCodes.UNAUTHORISED);
		throw new Error("You can't access this!");
	}
});

module.exports = { isAuth, isNotAuth, isCompany, isStudent };
