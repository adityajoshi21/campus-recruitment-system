const express = require('express');
const multer = require('multer');
let path = require('path');
const { v4: uuidv4 } = require('uuid');

const { isAuth, isCompany, isStudent } = require('../middleware/authHandler');
const {
	postAddJob,
	postEditJob,
	getJobDetails,
	deleteJob,
	getJobList,
	getRecentJobList,
	getMyJobList,
} = require('../controllers/jobController');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/files/');
	},
	filename: function (req, file, cb) {
		const filename = uuidv4();
		cb(null, filename + path.extname(file.originalname));
	},
});

const fileFilterDocs = (req, file, cb) => {
	if (!file.originalname.match(/\.(xls|xlsx|pdf|docx|doc)$/)) {
		cb(cb(null, false));
	} else {
		cb(null, true);
	}
};

let uploadDocs = multer({ storage, fileFilterDocs });

const router = express.Router();

router.route('/recent').get(isAuth, getRecentJobList);
router
	.route('/')
	.post(isAuth, isCompany, uploadDocs.array('files'), postAddJob)
	.get(isAuth, getJobList);

router.route('/my').get(isAuth, isCompany, getMyJobList);

router
	.route('/:jobID')
	.put(isAuth, isCompany, uploadDocs.array('files'), postEditJob)
	.get(isAuth, getJobDetails)
	.delete(isAuth, isCompany, deleteJob);

module.exports = router;
