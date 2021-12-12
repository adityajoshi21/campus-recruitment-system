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

			const defaultRound = new roundModel({});
			const roundDetails = await defaultRound.save();

			newJob.rounds.push(roundDetails._id);

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

module.exports = {
	postAddJob,
	postEditJob,
	getJobDetails,
	deleteJob,
	getJobList,
	getMyJobList,
};
