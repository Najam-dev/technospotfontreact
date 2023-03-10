import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              For further information visit us or contact us.
            </p>
          </div>
        </div>
        <div>
          <iframe style={{border: 0, width: '100%', height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.2530641979669!2d73.10017585329231!3d33.607332296765605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb0f6b7859bf%3A0x84ed3633d8958957!2sTechno%20Spot!5e0!3m2!1sen!2s!4v1677567951935!5m2!1sen!2s" frameBorder={0} allowFullScreen />
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.2530641979669!2d73.10017585329231!3d33.607332296765605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb0f6b7859bf%3A0x84ed3633d8958957!2sTechno%20Spot!5e0!3m2!1sen!2s!4v1677567951935!5m2!1sen!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="ri-map-pin-line" />
                  <h4>Location:</h4>
                  <p>NASTP, ALPHA TECHNO SQUARE</p>
                </div>
                <div className="email">
                  <i className="ri-mail-line" />
                  <h4>Email:</h4>
                  <p>technospot.nastp@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="ri-phone-line" />
                  <h4>Call:</h4>
                  <p>+92 323 9000102</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </div>
  )
}

export default Contact
