// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter with your email service configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chaouca@gmail.com',
        pass: '125/*', 
    },
});

// Email content
const mailOptions = {
    from: 'chaouca@gmail.com',
    to: 'chaouca@gmail.com', // Send the email to yourself
    subject: 'Test Email',
    text: 'Hello, this is a test email from Node.js!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent:', info.response);
    }
});
