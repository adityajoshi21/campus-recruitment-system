const express = require('express');
const multer = require('multer');
let path = require('path');
const { v4: uuidv4 } = require('uuid');

const { isAuth, isCompany, isStudent } = require('../middleware/authHandler');
const {
	getRounds,
	createRound,
	editRound,
	deleteRound,
	getRoundDetails,
	changeApplicantStatus,
} = require('../controllers/roundController');

const router = express.Router();

router
	.route('/changestatus/:roundId/:studentId/:status')
	.get(isAuth, isCompany, changeApplicantStatus);

router.route('/all/:jobID').get(isAuth, getRounds);

router.route('/').post(isAuth, isCompany, createRound);

router
	.route('/:roundID')
	.put(isAuth, isCompany, editRound)
	.delete(isAuth, isCompany, deleteRound)
	.get(isAuth, getRoundDetails);

module.exports = router;
