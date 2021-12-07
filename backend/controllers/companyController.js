const asyncHandler = require('express-async-handler');
var ObjectId = require('mongoose').Types.ObjectId;

const statusCodes = require('../utils/httpStatusCodes.js');
const companyModel = require('../models/companyModel');
const authModel = require('../models/authModel');
const jobModel = require('../models/jobModel');

const postEditProfile = asyncHandler(async (req, res) => {
	const reqBody = req.body;
	const user = req.user;
	const established = new Date(reqBody.established);

	req.file?.filename ? (reqBody.image = req.file.filename) : null;
	if (user && user.role === 'Company') {
		try {
			const newData = await companyModel.findOneAndUpdate(
				{ email: user.email },
				{ ...reqBody, established: established },
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

const getProfile = asyncHandler(async (req, res) => {
	const companyID = req.params.id;
	const company = await companyModel.findById(companyID);

	if (company) {
		company.image = '/uploads/profilePics/company/' + company.image;
		const jobs = await jobModel.find({ company: ObjectId(company._id) });
		res.json({ ...JSON.parse(JSON.stringify(company)), jobs });
	} else {
		res.status(statusCodes.NOT_FOUND);
		throw new Error('Company not found!');
	}
});

const getCompanies = asyncHandler(async (req, res) => {
	const list = await companyModel.find();
	res.json(list);
});

module.exports = { postEditProfile, getProfile, getCompanies };
