import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
 
    const { name, email, message, captchaToken } = req.body;

    // Verify reCAPTCHA
    const secretKey ="6LdYXF0qAAAAAKXfT8PLL7QucwSiXTOvMrTR_BGx";                                        // "6LclXFwqAAAAAEY2rvAdFhgRpa9RAXOqRS-78dcS"
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
    
    const captchaResponse = await fetch(verificationUrl, { method: 'POST' });
    const captchaResult = await captchaResponse.json();


    if (!captchaResult.success) {
      return res.status(400).json({ success: false, message: "reCAPTCHA verification failed" });
    }

    // Create reusable transporter object using Gmail SMTP
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:'sharmi97.ss@gmail.com',            //'info@anandbabu.in', // Gmail account
        pass:'qjvytorzokxiwbsk',                         //'*RDbB4&&d%&H4mJ%', // App password
      },
    });

    try {
      // Send mail
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Sender address
        to:'sharmi97.ss@gmail.com',                       //'info@anandbabu.in', // Receiver email
        subject: `Message from ${name}`, // Subject line
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`, // Message body
      });

      // Send success response
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) { 
      res.status(500).json({ success: false, message: `Failed to send email: ${error.message}` });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
