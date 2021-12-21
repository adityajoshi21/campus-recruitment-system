const express = require('express');
const {
	postRegister,
	postLogin,
	getUser,
	verifyEmail,
} = require('../controllers/authController.js');
const { validate } = require('../utils/validation.js');
const { isAuth, isNotAuth } = require('../middleware/authHandler');

const router = express.Router();

router.route('/register').post(validate('registerUser'), postRegister);
router.route('/login').post(postLogin);
router.route('/_me').get(isAuth, getUser);
router.route('/verify/:userId/:token').get(verifyEmail);

module.exports = router;
