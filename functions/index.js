const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "imanishita17@gmail.com",  
        pass: "taytay1713",    
    },
});

exports.sendEmailNotification = functions.firestore
    .document("messages/{docId}") 
    .onCreate((snap, context) => {
        const data = snap.data();
        const mailOptions = {
            from: "imanishita17@gmail.com",
            to: "imanishita17@gmail.com",  
            subject: "New Message Received!",
            text: `You received a new message:\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        };

        return transporter.sendMail(mailOptions)
            .then(() => console.log("Email sent successfully"))
            .catch(error => console.error("Error sending email:", error));
    });
