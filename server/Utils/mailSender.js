const nodemailer = require("nodemailer");

let transporter;

const getTransporter = () => {
    if (!transporter) {
        const port = Number(process.env.MAIL_PORT) || 587;
        transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port,
            secure: port === 465,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
    }
    return transporter;
};

/**
 * Sends an HTML email. Throws on failure so callers can report a real error
 * instead of a false success.
 */
const mailSender = async ({ to, subject, html, replyTo }) => {
    return getTransporter().sendMail({
        from: `"Abhishek Ghadge" <${process.env.MAIL_USER}>`,
        to,
        subject,
        html,
        ...(replyTo ? { replyTo } : {}),
    });
};

module.exports = mailSender;
