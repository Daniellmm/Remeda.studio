const { response } = require("express");
const nodemailer = require("nodemailer");

const emailSender = ({ username, email, story }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "idowudanielcsc190400@gmail.com",
      pass: "soti byck veqm mbtm",
      // user: process.env.EMAIL_SENDER,
      // pass: process.env.EMAIL_PASSCODE,
    },
  });

  const mailOptions = {
    from: `${username} a Remeda.studio User`,
    //to: 'help@remeda.studio',
    to: "idowudanielcsc190400@gmail.com",
    subject: `Here is a email from one of our user at Remeda.studio`,
    html: `
            <h3>Here is the message from <h2> ${username} </h2> </h3>
           <h3> <br> (Email: ${email})<br></h3>
            <p>${story}</p>
        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      
      console.log("Email sent: " + info.response);
    }
    response.redirect("*");
  });
};

module.exports = emailSender;
