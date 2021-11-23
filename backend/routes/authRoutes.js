const express = require('express');
const { postRegister } = require('../controllers/authController.js');
const { validate } = require('../utils/validation.js');

const router = express.Router();

router.route('/register').post(validate('registerUser'), postRegister);

module.exports = router;
