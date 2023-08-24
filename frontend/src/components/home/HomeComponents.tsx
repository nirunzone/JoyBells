import React from 'react'
import { Link } from 'react-router-dom'
import HeaderComponents from '../layouts/HeaderComponents'
import FooterComponents from '../layouts/FooterComponents'
import BannerComponents from '../lib/BannerComponents'


function HomeComponents() {
  return (
    <React.Fragment>
      <HeaderComponents/>
      <BannerComponents/>
        <div className="container-xxl bg-white p-0">
          <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="mb-3">School Facilities</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="facility-item">
                    <div className="facility-icon bg-primary">
                      <span className="bg-primary" />
                      <i className="fa fa-bus-alt fa-3x text-primary" />
                      <span className="bg-primary" />
                    </div>
                    <div className="facility-text bg-primary">
                      <h3 className="text-primary mb-3">School Bus</h3>
                      <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="facility-item">
                    <div className="facility-icon bg-success">
                      <span className="bg-success" />
                      <i className="fa fa-futbol fa-3x text-success" />
                      <span className="bg-success" />
                    </div>
                    <div className="facility-text bg-success">
                      <h3 className="text-success mb-3">Playground</h3>
                      <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="facility-item">
                    <div className="facility-icon bg-warning">
                      <span className="bg-warning" />
                      <i className="fa fa-home fa-3x text-warning" />
                      <span className="bg-warning" />
                    </div>
                    <div className="facility-text bg-warning">
                      <h3 className="text-warning mb-3">Healthy Canteen</h3>
                      <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="facility-item">
                    <div className="facility-icon bg-info">
                      <span className="bg-info" />
                      <i className="fa fa-chalkboard-teacher fa-3x text-info" />
                      <span className="bg-info" />
                    </div>
                    <div className="facility-text bg-info">
                      <h3 className="text-info mb-3">Positive Learning</h3>
                      <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xxl py-5">
            <div className="container">
              <div className="bg-light rounded">
                <div className="row g-0">
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                    <div className="position-relative h-100">
                      <img className="position-absolute w-100 h-100 rounded" src="img/call-to-action.jpg" style={{objectFit: 'cover'}} />
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="h-100 d-flex flex-column justify-content-center p-5">
                      <h1 className="mb-4">Become A Teacher</h1>
                      <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                      </p>
                      <Link className="btn btn-primary py-3 px-5" to=''>Get Started Now<i className="fa fa-arrow-right ms-2" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xxl py-5">
            <div className="container">
              <div className="bg-light rounded">
                <div className="row g-0">
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="h-100 d-flex flex-column justify-content-center p-5">
                      <h1 className="mb-4">Make Appointment</h1>
                      <form>
                        <div className="row g-3">
                          <div className="col-sm-6">
                            <div className="form-floating">
                              <input type="text" className="form-control border-0" id="gname" placeholder="Gurdian Name" />
                              <label htmlFor="gname">Gurdian Name</label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-floating">
                              <input type="email" className="form-control border-0" id="gmail" placeholder="Gurdian Email" />
                              <label htmlFor="gmail">Gurdian Email</label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-floating">
                              <input type="text" className="form-control border-0" id="cname" placeholder="Child Name" />
                              <label htmlFor="cname">Child Name</label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-floating">
                              <input type="text" className="form-control border-0" id="cage" placeholder="Child Age" />
                              <label htmlFor="cage">Child Age</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: '100px'}} defaultValue={""} />
                              <label htmlFor="message">Message</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: '400px'}}>
                    <div className="position-relative h-100">
                      <img className="position-absolute w-100 h-100 rounded" src="img/appointment.jpg" style={{objectFit: 'cover'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="mb-3">Popular Teachers</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                  eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative">
                    <img className="img-fluid rounded-circle w-75" src="img/team-1.jpg" alt="" />
                    <div className="team-text">
                      <h3>Full Name</h3>
                      <p>Designation</p>
                      <div className="d-flex align-items-center">
                        <Link className="btn btn-square btn-primary mx-1" to=''><i className="fab fa-facebook-f" /></Link>
                        <Link className="btn btn-square btn-primary  mx-1" to=''><i className="fab fa-twitter" /></Link>
                        <Link className="btn btn-square btn-primary  mx-1" to=''><i className="fab fa-instagram" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="team-item position-relative">
                    <img className="img-fluid rounded-circle w-75" src="img/team-2.jpg" alt="" />
                    <div className="team-text">
                      <h3>Full Name</h3>
                      <p>Designation</p>
                      <div className="d-flex align-items-center">
                        <Link className="btn btn-square btn-primary mx-1" to=''><i className="fab fa-facebook-f" /></Link>
                        <Link className="btn btn-square btn-primary  mx-1" to=''><i className="fab fa-twitter" /></Link>
                        <Link className="btn btn-square btn-primary  mx-1" to=''><i className="fab fa-instagram" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="team-item position-relative">
                    <img className="img-fluid rounded-circle w-75" src="img/team-3.jpg" alt="" />
                    <div className="team-text">
                      <h3>Full Name</h3>
                      <p>Designation</p>
                      <div className="d-flex align-items-center">
                        <Link className="btn btn-square btn-primary mx-1" to=''><i className="fab fa-facebook-f" /></Link>
                        <Link className="btn btn-square btn-primary  mx-1" to=''><i className="fab fa-twitter" /></Link>
                        <Link className="btn btn-square btn-primary  mx-1" to=''><i className="fab fa-instagram" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="mb-3">Our Clients Say!</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
              </div>
              <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item bg-light rounded p-5">
                  <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                  <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{width: '90px', height: '90px'}} />
                    <div className="ps-3">
                      <h3 className="mb-1">Client Name</h3>
                      <span>Profession</span>
                    </div>
                    <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
                  </div>
                </div>
                <div className="testimonial-item bg-light rounded p-5">
                  <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                  <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{width: '90px', height: '90px'}} />
                    <div className="ps-3">
                      <h3 className="mb-1">Client Name</h3>
                      <span>Profession</span>
                    </div>
                    <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
                  </div>
                </div>
                <div className="testimonial-item bg-light rounded p-5">
                  <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                  <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{width: '90px', height: '90px'}} />
                    <div className="ps-3">
                      <h3 className="mb-1">Client Name</h3>
                      <span>Profession</span>
                    </div>
                    <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
        </div>
        <FooterComponents/>
      </React.Fragment>
  )
}

export default HomeComponents