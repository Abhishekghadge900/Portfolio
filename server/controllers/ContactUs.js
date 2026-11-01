const { ownerNotificationEmail } = require("../mail/OwnerNotification");
const mailSender = require("../Utils/mailSender");

const LIMITS = { name: 100, email: 254, message: 3000 };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sanitize = (body) => {
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
        return { error: "Name, email and message are all required." };
    }
    if (name.length > LIMITS.name) {
        return { error: `Name must be at most ${LIMITS.name} characters.` };
    }
    if (email.length > LIMITS.email || !EMAIL_REGEX.test(email)) {
        return { error: "Please provide a valid email address." };
    }
    if (message.length > LIMITS.message) {
        return { error: `Message must be at most ${LIMITS.message} characters.` };
    }
    return { name, email, message };
};

exports.contactUsController = async (req, res) => {
    const result = sanitize(req.body || {});
    if (result.error) {
        return res.status(400).json({ success: false, message: result.error });
    }
    const { name, email, message } = result;

    try {
        // Only the site owner receives mail. Sending a confirmation to an
        // arbitrary visitor-supplied address would let anyone use this
        // mailbox to spam third parties. replyTo lets the owner answer
        // directly from their inbox.
        await mailSender({
            to: process.env.OWNER_EMAIL,
            subject: `New portfolio message from ${name}`,
            html: ownerNotificationEmail(name, email, message),
            replyTo: email,
        });

        return res.json({ success: true, message: "Message sent successfully." });
    } catch (error) {
        console.error("Error in contactUsController:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while sending your message. Please try again later.",
        });
    }
};
