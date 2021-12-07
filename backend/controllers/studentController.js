const asyncHandler = require('express-async-handler');
var ObjectId = require('mongoose').Types.ObjectId;

const statusCodes = require('../utils/httpStatusCodes.js');
const studentModel = require('../models/studentModel');
const resumeModel = require('../models/resumeModel');
const authModel = require('../models/authModel');

const postEditProfile = asyncHandler(async (req, res) => {
	const reqBody = req.body;
	const user = req.user;
	const dob = new Date(reqBody.dob);

	req.file?.filename ? (reqBody.image = req.file.filename) : null;

	if (user && user.role === 'Student') {
		try {
			const newData = await studentModel.findOneAndUpdate(
				{ email: user.email },
				{ ...reqBody, dob: dob },
				{ upsert: true, useFindAndModify: false, new: true },
				(err, model) => {
					res.json(model);
				}
			);
		} catch (err) {
			console.log(err);
			res.status(statusCodes.BAD_REQUEST);
			throw new Error('Something wrong happened!');
		}
	} else {
		res.status(statusCodes.NOT_FOUND);
		throw new Error('User not found!');
	}
});

const getProfile = asyncHandler(async (req, res) => {
	const user = req.user;
	if (user) {
		try {
			const student = await studentModel.findOne({
				studentID: req.params.studentID,
			});
			if (student) {
				student.image = '/uploads/profilePics/student/' + student.image;
				res.json(student);
			} else {
				res.status(statusCodes.NOT_FOUND);
				throw new Error('Student not found');
			}
		} catch (err) {
			res.status(statusCodes.BAD_REQUEST);
			throw new Error('Something wrong happened!');
		}
	} else {
		res.status(statusCodes.NOT_FOUND);
		throw new Error('Student not found!');
	}
});

const postEditResume = asyncHandler(async (req, res) => {
	const reqBody = req.body;
	const email = req.user.email;
	const dob = new Date(reqBody.dob);

	const user = await studentModel.findOne({ email });
	if (user) {
		try {
			const newData = await resumeModel.findOneAndUpdate(
				{ student: user._id },
				{ ...reqBody, dob: dob, student: user },
				{ upsert: true, useFindAndModify: false, new: true },
				(err, model) => {
					res.json(model);
				}
			);
		} catch (err) {
			res.status(statusCodes.BAD_REQUEST);
			throw new Error('Something wrong happened!');
		}
	} else {
		res.status(statusCodes.NOT_FOUND);
		throw new Error('User not found!');
	}
});

const getResume = asyncHandler(async (req, res) => {
	const email = req.user.email;

	const user = await authModel.findOne({ email });
	if (user) {
		try {
			const resume = await resumeModel.findOne({
				student: ObjectId(req.params.studentID),
			});
			if (resume && (resume.email == email || user.role == 'Company')) {
				res.json(resume);
			} else {
				throw new Error('Not Authorized!');
			}
		} catch (err) {
			res.status(statusCodes.BAD_REQUEST);
			throw new Error(err || 'Something wrong happened!');
		}
	} else {
		res.status(statusCodes.NOT_FOUND);
		throw new Error('Not Authorized!');
	}
});

module.exports = { postEditProfile, getProfile, postEditResume, getResume };
