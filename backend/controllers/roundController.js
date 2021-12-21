const fs = require('fs');
const asyncHandler = require('express-async-handler');
var ObjectId = require('mongoose').Types.ObjectId;

const statusCodes = require('../utils/httpStatusCodes.js');
const companyModel = require('../models/companyModel');
const jobModel = require('../models/jobModel');
const roundModel = require('../models/roundModel');

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
	const { title, description, status } = req.body;
	const { roundID } = req.params;
	const startDate = new Date(req.body.startDate);
	const endDate = new Date(req.body.endDate);

	const roundDetails = await roundModel.findById(roundID).populate('job');
	roundDetails.title = title;
	roundDetails.description = description;
	roundDetails.startDate = startDate;
	roundDetails.endDate = endDate;
	roundDetails.status = status;

	const allRounds = roundDetails.job.rounds;
	const findRound = allRounds.find((round) => {
		return String(round.details) == String(roundID);
	});

	const roundOrder = findRound.order;
	if (allRounds.length > roundOrder) {
		roundDetails.resultType = 'Round';
	} else {
		roundDetails.resultType = 'Final';
	}

	await roundDetails.save();

	res.json(roundDetails);
});

const deleteRound = asyncHandler(async (req, res) => {
	const { roundID } = req.params;
	const roundDetails = await roundModel.findById(roundID).populate('job');

	const jobDetails = await jobModel.findById(roundDetails.job._id);
	const newRounds = jobDetails.rounds.filter(
		(round) => String(round.details) != String(roundID)
	);

	jobDetails.rounds = newRounds;
	await jobDetails.save();
	await roundDetails.remove();
	res.json({ message: 'Round deleted!' });
});

const getRoundDetails = asyncHandler(async (req, res) => {
	const { roundID } = req.params;
	const roundDetails = await roundModel
		.findById(roundID)
		.populate('job')
		.populate('applicants.student');
	const { role } = req.user;
	if (role == 'Student') {
		if (roundDetails.status == 'pending') {
			return res.json({ message: 'Result Pending' });
		}
	}
	res.json(roundDetails);
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
	getRounds,
	createRound,
	editRound,
	deleteRound,
	getRoundDetails,
	changeApplicantStatus,
};
