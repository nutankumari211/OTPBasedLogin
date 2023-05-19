const nodemailer = require("nodemailer");

async function sendEmail(recipient, otp) {
  // Create a nodemailer transporter using your email service credentials
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., 'Gmail', 'Outlook'
    auth: {
      user: "nutankrii87@gmail.com",
      pass: "yidpwuvoroizzpur",
    },
  });

  // Define the email options
  const mailOptions = {
    from: "nutankrii87@gmail.com",
    to: recipient,
    subject: "OTP Verification",
    text: `Your OTP: ${otp}`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
