
var mail = require('nodemailer');
mailer = mail.createTransport({
    service: 'gmail',
    auth: {
        user: 'ttemp1094@gmail.com',
        pass: '6yL{A9q9Ab%D4X'
    }
});
mailer.sendMail(mail, function (err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log("Mail sent: " + result.response)
    }
})
