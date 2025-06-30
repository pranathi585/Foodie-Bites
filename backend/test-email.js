require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.TO_EMAIL,
  subject: "Test Email from Foodie Bites",
  text: "This is just a test. Yay! 🎉"
}, (err, info) => {
  if (err) {
    console.error("❌ Email failed:", err);
  } else {
    console.log("✅ Email sent:", info.response);
  }
});
