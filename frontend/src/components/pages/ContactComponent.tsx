import React from 'react'
import HeaderComponents from '../layouts/HeaderComponents'
import BannerComponents from '../lib/BannerComponents'
import FooterComponents from '../layouts/FooterComponents'

function ContactComponent() {
  return (
    <React.Fragment>
      <HeaderComponents/>
      <BannerComponents/>
        <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h1 className="mb-3">Get In Touch</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
              eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row g-4 mb-5">
            <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '75px', height: '75px'}}>
                <i className="fa fa-map-marker-alt fa-2x text-primary" />
              </div>
              <h6>Bhanimandal Marg,Behind Zoo, Lalitpur, Nepal</h6>
            </div>
            <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '75px', height: '75px'}}>
                <i className="fa fa-envelope-open fa-2x text-primary" />
              </div>
              <h6>info@example.com</h6>
            </div>
            <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '75px', height: '75px'}}>
                <i className="fa fa-phone-alt fa-2x text-primary" />
              </div>
              <h6>01-5421973</h6>
            </div>
          </div>
          <div className="bg-light rounded">
            <div className="row g-0">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
                  <form>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: '100px'}} defaultValue={""} />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: '400px'}}>
                <div className="position-relative h-100">
                  <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.423172538834!2d85.30651867432198!3d27.673312926993834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb183357a790f3%3A0x10ffcef8f80493f9!2sJoy%20Bells%20School!5e0!3m2!1sen!2snp!4v1692687173348!5m2!1sen!2snp" frameBorder={0} style={{minHeight: '400px', border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponents/>
    </React.Fragment>
    
  )
}

export default ContactComponent