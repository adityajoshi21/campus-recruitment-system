const express = require('express');
const multer = require('multer');
let path = require('path');
const { v4: uuidv4 } = require('uuid');

const { isAuth } = require('../middleware/authHandler');
const {
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

router
	.route('/')
	.post(isAuth, uploadDocs.array('files'), postAddJob)
	.get(isAuth, getJobList);
router.route('/my').get(isAuth, getMyJobList);
router
	.route('/:jobID')
	.put(isAuth, uploadDocs.array('files'), postEditJob)
	.get(isAuth, getJobDetails)
	.delete(isAuth, deleteJob);
router
	.route('/changestatus/:roundId/:studentId/:status')
	.get(isAuth, changeApplicantStatus);
router.route('/rounds/:jobID').get(isAuth, getRounds);
router.route('/round').post(isAuth, createRound);
router
	.route('/round/:roundID')
	.put(isAuth, editRound)
	.delete(isAuth, deleteRound);

module.exports = router;
