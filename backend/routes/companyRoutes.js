const express = require('express');
const multer = require('multer');
let path = require('path');

const { isAuth, isCompany } = require('../middleware/authHandler');
const {
	postEditProfile,
	getProfile,
	getMyProfile,
	getCompanies,
} = require('../controllers/companyController');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/profilePics/company/');
	},
	filename: function (req, file, cb) {
		const companyID = req.user._id;
		cb(null, companyID + path.extname(file.originalname));
	},
});

const fileFilterImages = (req, file, cb) => {
	const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
	if (allowedFileTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

let uploadImages = multer({ storage, fileFilterImages });

const router = express.Router();

router
	.route('/profile')
	.post(isAuth, isCompany, uploadImages.single('image'), postEditProfile);
router.route('/myprofile').get(isAuth, isCompany, getMyProfile);
router.route('/profile/:id').get(isAuth, getProfile);
router.route('/list').get(isAuth, getCompanies);

module.exports = router;
