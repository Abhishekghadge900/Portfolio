const { contactUsEmail } = require("../mail/contactFormRes")
const { ownerNotificationEmail } = require("../mail/OwnerNotification.js")
const mailSender = require("../Utils/mailSender")

exports.contactUsController = async (req, res) => {
  const { name, email, message } = req.body;
  //console.log("Request body:", req.body);
  
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