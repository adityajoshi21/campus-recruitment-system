const asyncHandler = require('express-async-handler');
var ObjectId = require('mongoose').Types.ObjectId;

const statusCodes = require('../utils/httpStatusCodes.js');
const studentModel = require('../models/studentModel');
const jobModel = require('../models/jobModel');
const roundModel = require('../models/roundModel');
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

const getMyProfile = asyncHandler(async (req, res) => {
	const email = req.user.email;
	const student = await studentModel.findOne({ email });

	if (student) {
		res.json(student);
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

const applyForJob = asyncHandler(async (req, res) => {
	const email = req.user.email;
	const jobID = req.params.jobID;

	const studentDetails = await studentModel.findOne({ email });
	const studentId = studentDetails._id;
	const jobDetails = await jobModel.findById(jobID);

	const currentDate = new Date();
	if (
		!(currentDate >= jobDetails.startDate && currentDate <= jobDetails.endDate)
	) {
		throw new Error('Too late or early!');
	}

	if (jobDetails.criteria > studentDetails.cpi) {
		throw new Error(
			"You're not eligible for this profile. Reason - Not enough CPI."
		);
	}

	if (!jobDetails.openFor.includes(studentDetails.degree)) {
		throw new Error("You're not eligible for this profile.");
	}

	const round = jobDetails.rounds[0];
	const roundDetails = await roundModel.findById(round.details);

	const checkIfAlreadyExist = roundDetails.applicants.find((applicant) => {
		return String(applicant.student._id) == String(studentId);
	});

	if (checkIfAlreadyExist) {
		throw new Error('Already applied!');
	}

	roundDetails.applicants.push({ student: studentDetails._id });
	await roundDetails.save();

	res.json({ message: 'Successfully Applied' });
});

module.exports = {
	postEditProfile,
	getProfile,
	getMyProfile,
	postEditResume,
	getResume,
	applyForJob,
};
