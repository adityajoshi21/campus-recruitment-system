const mailgun = require('mailgun-js');

var mg = mailgun({
	apiKey: '28eb8ec2a980f141509ddb5004ac80bc-adf6de59-2513ad49',
	domain: 'programmerviral.tech',
});

exports.sendEmail = async (receiver, subject, text) => {
	const data = {
		from: 'placementsabkihogi@test.co',
		to: receiver,
		subject,
		text,
	};

	const resBody = await mg.messages().send(data);
};
