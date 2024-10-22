import nodemailer from 'nodemailer';
import 'dotenv/config'; 
export default async function handler(req, res) {
  if (req.method === 'POST') {

    const { name, email, message, captchaToken } = req.body;

    console.log('User:', process.env.user);
    console.log('Pass:', process.env.pass);

    // Verify reCAPTCHA
    const secretKey =process.env.secret;                                      
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
        user:process.env.user,              
        pass: process.env.pass                             
      },
    });





    try {
      // Send mail
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Sender address
        to:process.env.user,                       
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
