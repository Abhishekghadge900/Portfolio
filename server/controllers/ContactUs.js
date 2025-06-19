const { contactUsEmail } = require("../mail/contactFormRes")
const { ownerNotificationEmail } = require("../mail/OwnerNotification.js")
const mailSender = require("../Utils/mailSender")

const validateInput = (name, email, message) => {
    if (!name || !email || !message) {
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

exports.contactUsController = async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!validateInput(name, email, message)) {
        return res.status(400).json({
            success: false,
            message: "Invalid input data",
        });
    }
  
  try {
    const [senderEmailRes, ownerEmailRes] = await Promise.all([
      mailSender(
        email,
        "Your message has been sent successfully",
        contactUsEmail(name, email, message)
      ),
      mailSender(
        process.env.OWNER_EMAIL,
        `New Contact Form Submission from ${name}`,
        ownerNotificationEmail(name, email, message)
      )
    ]);
    
    //console.log("Emails sent successfully");
    
    return res.json({
      success: true,
      message: "Emails sent successfully to both sender and owner",
    });
  } catch (error) {
    console.error("Error in contactUsController:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending emails...",
    });
  }
}