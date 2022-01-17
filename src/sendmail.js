const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'hemkmruch86@gmail.com',
		pass: '##'
	}
});

let mailDetails = {
	from: 'hemkmruch86@gmail.com',
	to: 'hemkmruch86@gmail.com,hemant.uch22@gmail.com',
	subject: 'Test mail',
	text: 'Node.js testing mail'
    // html: '<h1>Welcome</h1><p>Email sent</p>'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs');
	} else {
		console.log(data);
		console.log("Sent Email");

	}
});


// to use this file in another file 
// var mail = require('./config/mailer')();
// mail.send();