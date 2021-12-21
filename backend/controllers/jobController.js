const fs = require('fs');
const asyncHandler = require('express-async-handler');
var ObjectId = require('mongoose').Types.ObjectId;

const statusCodes = require('../utils/httpStatusCodes.js');
const companyModel = require('../models/companyModel');
const jobModel = require('../models/jobModel');
const roundModel = require('../models/roundModel');

const postAddJob = asyncHandler(async (req, res) => {
	const reqBody = req.body;
	const user = req.user;
	const startDate = new Date(reqBody.startDate);
	const endDate = new Date(reqBody.endDate);

	const company = await companyModel.findOne({ email: user.email });

	if (user && company) {
		try {
			const files = [];
			if (req.files.length > 0) {
				req.files.forEach((file) => {
					files.push({
						originalName: file.originalname,
						fileType: file.mimetype,
						fileName: file.filename,
						size: file.size,
					});
				});
			}

			reqBody.files = files;

			const newJob = new jobModel({
				...reqBody,
				startDate,
				endDate,
				company,
			});

			const defaultRound = new roundModel({ job: newJob });
			const roundDetails = await defaultRound.save();

			newJob.rounds.push({ details: roundDetails._id });

			const jobDetails = await newJob.save();

			res.json(jobDetails);
		} catch (err) {
			res.status(statusCodes.BAD_REQUEST);
			console.log(err);
			throw new Error('Something wrong happened!');
		}
	} else {
		res.status(statusCodes.NOT_FOUND);
		throw new Error('Unauthorized!');
	}
});

const postEditJob = asyncHandler(async (req, res) => {
	const reqBody = req.body;
	const jobID = req.params.jobID;
	const email = req.user.email;
	const startDate = new Date(reqBody.startDate);
	const endDate = new Date(reqBody.endDate);
	let updatedFiles = [];

	const job = await jobModel.findById(jobID).populate('company');

	if (job && email == job.company.email) {
		if (reqBody.deleteFiles.length > 0) {
			job.files.forEach((file) => {
				if (!reqBody.deleteFiles.includes(file.fileName)) {
					updatedFiles.push(file);
				} else {
					console.log('Delete ' + file.fileName);
					const pathToFile = 'uploads/files/' + file.fileName;
					if (fs.existsSync(pathToFile)) {
						fs.unlinkSync(pathToFile);
					}
				}
			});
		} else {
			updatedFiles = job.files;
		}

		if (req.files.length > 0) {
			req.files.forEach((file) => {
				updatedFiles.push({
					originalName: file.originalname,
					fileType: file.mimetype,
					fileName: file.filename,
					size: file.size,
				});
			});
		}

		try {
			const updatedJob = await jobModel.findByIdAndUpdate(
				{ _id: job._id },
				{ ...reqBody, startDate, endDate, files: updatedFiles },
				{
					new: true,
				}
			);

			res.json(updatedJob);
		} catch (err) {
			res.status(statusCodes.BAD_REQUEST);
			throw new Error('Something wrong happened!');
		}
	} else {
		res.status(statusCodes.NOT_FOUND);
		throw new Error('Unauthorized!');
	}
});

const getJobDetails = asyncHandler(async (req, res) => {
	const jobID = req.params.jobID;
	const jobDetails = await jobModel.findById(jobID);

	if (jobDetails) {
		const files = jobDetails.files.map((file) => {
			file.fileURL = 'uploads/files/' + file.fileName;
			return file;
		});
		jobDetails.files = files;

		res.json(jobDetails);
	} else {
		res.status(statusCodes.NOT_FOUND);
		throw new Error('Job not found!');
	}
});

const deleteJob = asyncHandler(async (req, res) => {
	const jobID = req.params.jobID;
	const email = req.user.email;
	const job = await jobModel.findById(jobID).populate('company');

	if (job && email == job.company.email) {
		await jobModel.deleteOne({ _id: job._id });
		res.json({ message: 'Job deleted successfully' });
	} else {
		res.status(statusCodes.NOT_FOUND);
		throw new Error('Job not found!');
	}
});

const getJobList = asyncHandler(async (req, res) => {
	const list = await jobModel.find();
	res.json(list);
});

const getMyJobList = asyncHandler(async (req, res) => {
	const company = await companyModel.findOne({ email: req.user.email });
	const list = await jobModel.find({ company: ObjectId(company._id) });
	res.json(list);
});

const getRounds = asyncHandler(async (req, res) => {
	const { jobID } = req.params;
	const jobDetails = await jobModel.findById(jobID).populate('rounds');
	res.json(jobDetails.rounds);
});

const createRound = asyncHandler(async (req, res) => {
	const { jobID, title, description } = req.body;
	const jobDetails = await jobModel.findById(jobID);
	const startDate = new Date(req.body.startDate);
	const endDate = new Date(req.body.endDate);

	const newRound = new roundModel({
		title,
		description,
		startDate,
		endDate,
		job: jobDetails._id,
	});

	const roundDetails = await newRound.save();

	const [lastRound] = jobDetails.rounds.slice(-1);
	jobDetails.rounds.push({
		details: roundDetails._id,
		order: lastRound.order + 1,
	});

	await jobDetails.save();
	res.json(roundDetails);
});

const editRound = asyncHandler(async (req, res) => {
	const { title, description } = req.body;
	const { roundID } = req.params;
	const startDate = new Date(req.body.startDate);
	const endDate = new Date(req.body.endDate);

	const roundDetails = await roundModel.findById(roundID);
	roundDetails.title = title;
	roundDetails.description = description;
	roundDetails.startDate = startDate;
	roundDetails.endDate = endDate;

	await roundDetails.save();

	res.json(roundDetails);
});

const deleteRound = asyncHandler(async (req, res) => {
	const { roundID } = req.params;
	const roundDetails = await roundModel.findById(roundID).populate('job');

	const jobDetails = await jobModel.findById(roundDetails.job._id);
	const newRounds = jobDetails.rounds.filter(
		(round) => String(round._id) != String(roundID)
	);
	jobDetails.rounds = newRounds;
	await jobDetails.save();
	await roundDetails.remove();
	res.json({ message: 'Round deleted!' });
});

const changeApplicantStatus = asyncHandler(async (req, res) => {
	const { studentId, roundId, status } = req.params;

	const roundDetails = await roundModel.findById(roundId).populate('job');
	const jobDetails = await jobModel.findById(roundDetails.job._id);

	const applicants = roundDetails.applicants;
	roundDetails.applicants = applicants.map((applicant) => {
		if (String(applicant.student._id) == String(studentId)) {
			applicant.status = status;
			return applicant;
		}
		return applicant;
	});

	await roundDetails.save();

	const roundInJob = jobDetails.rounds.find(
		(round) => String(round.details) == roundId
	);
	const order = roundInJob.order + 1;

	const nextRound = jobDetails.rounds.find(
		(round) => String(round.order) == order
	);

	if (status == 'shortlisted') {
		if (nextRound) {
			const roundDetails = await roundModel.findById(nextRound.details);
			roundDetails.applicants.push({ student: studentId });
			await roundDetails.save();
		} else {
			res.json({ message: 'Final Round' });
		}
	} else {
		if (nextRound) {
			const roundDetails = await roundModel.findById(nextRound.details);
			const newRoundsList = roundDetails.applicants.filter(
				(applicant) => String(applicant.student) != String(studentId)
			);

			roundDetails.applicants = newRoundsList;
			await roundDetails.save();
		}
	}

	res.json({ message: 'Status updated' });
});

module.exports = {
	postAddJob,
	postEditJob,
	getJobDetails,
	deleteJob,
	getJobList,
	getMyJobList,
	getRounds,
	createRound,
	editRound,
	deleteRound,
	changeApplicantStatus,
};
