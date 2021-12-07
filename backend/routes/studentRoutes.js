const express = require('express');
const multer = require('multer');
let path = require('path');

const { isAuth } = require('../middleware/authHandler');
const {
	postEditProfile,
	getProfile,
	postEditResume,
	getResume,
} = require('../controllers/studentController');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/profilePics/student/');
	},
	filename: function (req, file, cb) {
		const studentID = req.body.studentID;
		cb(null, studentID + path.extname(file.originalname));
	},
});

const fileFilter = (req, file, cb) => {
	const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
	if (allowedFileTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

let upload = multer({ storage, fileFilter });

const router = express.Router();

router.route('/profile').post(isAuth, upload.single('image'), postEditProfile);
router.route('/profile/:studentID').get(isAuth, getProfile);
router.route('/resume').post(isAuth, postEditResume);
router.route('/resume/:studentID').get(isAuth, getResume);

module.exports = router;
