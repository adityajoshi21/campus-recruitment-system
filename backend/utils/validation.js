const validator = require('express-validator');

const { check, body } = validator;

exports.validate = (method) => {
	switch (method) {
		case 'registerUser': {
			return [
				body('email', 'Invalid email').exists().bail().notEmpty().isEmail(),
				body('name', 'Invalid name').exists().bail().notEmpty(),
				body('password', 'Invalid password')
					.exists()
					.bail()
					.notEmpty()
					.bail()
					.isLength({ min: 6 })
					.withMessage('Password too short! Should be atleast 6 characters')
					.bail()
					.custom((password, { req }) => {
						if (password !== req.body.confirmPassword) {
							throw new Error('Passwords do not match');
						}
						return true;
					}),
				body('role', 'Invalid role')
					.exists()
					.bail()
					.notEmpty()
					.bail()
					.isAlpha()
					.isIn(['Company', 'Student']),
			];
		}
	}
};
