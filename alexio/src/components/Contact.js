import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { executeRecaptcha } = useGoogleReCaptcha(); // reCAPTCHA v3 hook
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({status:false,msg:''});


  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    if (!executeRecaptcha) {
      setResponseMessage({msg:'reCAPTCHA not ready'});
      return;
    }

    const token = await executeRecaptcha('contact_form'); // v3 executes an action
    if (!token) {
      setResponseMessage({msg:'reCAPTCHA verification failed.'});
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, captchaToken: token }), // Send token to the server
      });

      const data = await res.json();
      if (data.success) {
        setResponseMessage({status:true,msg:'Email sent successfully!'});
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage({msg:`Error sending email: ${data.message}`});
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setResponseMessage({msg:'Failed to send email.'});
      setFormData({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <SectionContainer
      name={"contact"}
      title="CONTACT ME"
      subTitle={"GET IN TOUCH"}
      leftImage="static/img/user2.png"
    >
      <div className="row">
        <div className="col-lg-12 m-30px-b sm-m-15px-b">
          <div className="contact-form">
            <h4 className="dark-color font-alt m-20px-b">Say Something</h4>
            <form className=" " onSubmit={(e) => handleSubmit(e)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="name"
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={formData.name}
                      type="text"
                      placeholder="Name"
                      className="validate form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={formData.email}
                      className="validate form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      id="message"
                      placeholder="Your Comment"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={formData.message}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="send">
                    <button className="btn btn-theme" type="submit" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                  {/* {responseMessage && <p>{responseMessage}</p>} */}
                <div><br/></div>
                
                
                  <span
                    id="suce_message"
                    className="mt-3"
                     style={{ color: responseMessage.status ? "green" : "red" }}
                  >
                  {responseMessage && <p>{responseMessage.msg}</p>}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        {/* <div className="col-md-4 m-15px-tb">
          <div className="contact-info">
            <i className="theme-color ti-location-pin" />
            <h6 className="dark-color font-alt">Our Address</h6>
            <p>123 Stree New York City , USA 750065.</p>
          </div>
        </div> */}
        <div className="col-md-4 m-15px-tb">
          <div className="contact-info">
            <i className="theme-color ti-mobile" />
            <h6 className="dark-color font-alt">Phone</h6>
            <p>
            +91 91766 ANAND
              {/* <br />
              Office: +004 444 444 */}
              <br />
            </p>
          </div>
        </div>
        <div className="col-md-4 m-15px-tb sm-m-0px-b">
          <div className="contact-info">
            <i className="theme-color ti-email" />
            <h6 className="dark-color font-alt">Email</h6>
            <p>
            info@anandbabu.in
              <br />
              {/* contact@domain.com */}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default function ContactWithRecaptcha() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey= "6LdYXF0qAAAAAOFCtUr9yWNcp0dx1XMAW_X5MJbj">    {/* reCaptchaKey= "6LclXFwqAAAAAJnHqdtQUdgGeOKVGb6D7WST6ROj"  */}     {/* Use your reCAPTCHA v3 site key */}
      <Contact />
    </GoogleReCaptchaProvider>
  );
}


