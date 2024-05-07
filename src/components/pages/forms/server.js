const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the CORS middleware

const app = express();

// Use CORS middleware
app.use(cors()); // This allows all origins (useful for development)

// Body parser to parse JSON requests
app.use(bodyParser.json());

// Create a transport for Nodemailer for Gmail
const transporter = nodemailer.createTransport({
  service: "gmail", // Your email service
  auth: {
    user: "shaadqureshi1709@gmail.com", // Your email
    pass: "vipw bprm srxe xfbj", // Your email password
  },
});

// Create a Nodemailer transporter for Outlook/Office 365
// const transporter = nodemailer.createTransport({
//   host: "smtp.office365.com", // Outlook's SMTP host
//   port: 587, // Outlook's SMTP port
//   secure: false, // Port 587 requires STARTTLS (not TLS/SSL)
//   auth: {
//     user: "shaadqureshi-intelegain@outlook.com", // Your Outlook email
//     pass: "dynamic@2o23", // Your Outlook password or app-specific password
//   },
//   tls: {
//     ciphers: "SSLv3", // Ensure secure connection
//   },
// });

// Endpoint to send an email
app.post("/send-email", async (req, res) => {
  try {
    const { subject, contactform, talksalesform, scheduleform, firstName, lastName, emailAddress, phoneNumber, message, companyName, teamSize, date, time } = req.body;
    const mailOptions = {
      from: "shaad.q@intelegain.com", // Your email address
      to: "shaadqureshi1709@gmail.com", // Recipient's email address
      subject: `Boozno: ${subject}`,
      text: `
Hi Boozno,
${
  talksalesform
    ? `
We have received an inquiry about scheduling a demo. Below are the details:

First Name: ${firstName}
Last Name: ${lastName}
Email: ${emailAddress}
Phone: ${phoneNumber}
Company name: ${companyName}
Team Size: ${teamSize} people`
    : scheduleform
    ? `
We have received an inquiry about talking to our sales team. Below are the details:

First Name: ${firstName}
Last Name: ${lastName}
Email: ${emailAddress}
Phone: ${phoneNumber}
Company name: ${companyName}
Team Size: ${teamSize} people
Date: ${date}
Time: ${time}`
    : contactform
    ? `
We have received a contact inquiry message. Below are the details: 

First Name: ${firstName}
Last Name: ${lastName}
Email: ${emailAddress}
Phone: ${phoneNumber}
Message: ${message}`
    : ""
}

Regards,
Boozno Static Website
    `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000; // Change the port if needed
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
