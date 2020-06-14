const transporter = require('../../lib/email');

module.exports = app => {
    app.post('/email', (req,res) => {
        // run validation on email, name and message (can't be blank);
        const message = {
            from: process.env.EMAIL_USERNAME,
            to: process.env.EMAIL_TO,
            subject: 'Portfolio contact form',
            html: `<h4>From: ${req.body.name}</h4>  <h4>Contact email: ${req.body.email}</h4> <p>${req.body.message}</p>`
        };
        
        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                res.sendStatus(200)
                console.log(info);
            }
        });        
    });
}