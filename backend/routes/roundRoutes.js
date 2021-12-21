const express = require('express');
const multer = require('multer');
let path = require('path');
const { v4: uuidv4 } = require('uuid');

const { isAuth } = require('../middleware/authHandler');
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
	.get(isAuth, changeApplicantStatus);

router.route('/all/:jobID').get(isAuth, getRounds);

router.route('/').post(isAuth, createRound);

router
	.route('/:roundID')
	.put(isAuth, editRound)
	.delete(isAuth, deleteRound)
	.get(isAuth, getRoundDetails);

module.exports = router;
