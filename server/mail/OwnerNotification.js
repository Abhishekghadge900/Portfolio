exports.ownerNotificationEmail = (name, email, message) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #333; text-align: center; background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
        🔔 New Contact Form Submission
      </h2>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #555; margin-bottom: 15px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          Contact Details:
        </h3>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
          <p style="margin: 10px 0;"><strong style="color: #007bff;">Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong style="color: #007bff;">Email:</strong> 
            <a href="mailto:${email}" style="color: #28a745; text-decoration: none;">${email}</a>
          </p>
        </div>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px;">
          <p style="margin-bottom: 10px;"><strong style="color: #007bff;">Message:</strong></p>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px; border-radius: 0 5px 5px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">
          📧 This email was sent from your website's contact form<br>
        </p>
      </div>
    </div>
  `
}