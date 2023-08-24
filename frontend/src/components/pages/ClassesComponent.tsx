import React from 'react'
import { Link } from 'react-router-dom'
import HeaderComponents from '../layouts/HeaderComponents'
import BannerComponents from '../lib/BannerComponents'
import FooterComponents from '../layouts/FooterComponents'

function ClassesComponent() {
  return (
    <React.Fragment>
      <HeaderComponents/>
      <BannerComponents/>
        <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="mb-3">School Classes</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="classes-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                      <img className="img-fluid rounded-circle" src="img/classes-1.jpg" alt="" />
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                      <Link className="d-block text-center h3 mt-3 mb-4" to=''>Art &amp; Drawing</Link>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: '45px', height: '45px'}} />
                          <div className="ms-3">
                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                            <small>Teacher</small>
                          </div>
                        </div>
                        <span className="bg-primary text-white rounded-pill py-2 px-3">$99</span>
                      </div>
                      <div className="row g-1">
                        <div className="col-4">
                          <div className="border-top border-3 border-primary pt-2">
                            <h6 className="text-primary mb-1">Age:</h6>
                            <small>3-5 Years</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-success pt-2">
                            <h6 className="text-success mb-1">Time:</h6>
                            <small>9-10 AM</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-warning pt-2">
                            <h6 className="text-warning mb-1">Capacity:</h6>
                            <small>30 Kids</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="classes-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                      <img className="img-fluid rounded-circle" src="img/classes-2.jpg" alt="" />
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                      <Link className="d-block text-center h3 mt-3 mb-4" to=''>Color Management</Link>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: '45px', height: '45px'}} />
                          <div className="ms-3">
                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                            <small>Teacher</small>
                          </div>
                        </div>
                        <span className="bg-primary text-white rounded-pill py-2 px-3">$99</span>
                      </div>
                      <div className="row g-1">
                        <div className="col-4">
                          <div className="border-top border-3 border-primary pt-2">
                            <h6 className="text-primary mb-1">Age:</h6>
                            <small>3-5 Years</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-success pt-2">
                            <h6 className="text-success mb-1">Time:</h6>
                            <small>9-10 AM</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-warning pt-2">
                            <h6 className="text-warning mb-1">Capacity:</h6>
                            <small>30 Kids</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="classes-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                      <img className="img-fluid rounded-circle" src="img/classes-3.jpg" alt="" />
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                      <Link className="d-block text-center h3 mt-3 mb-4" to=''>Athletic &amp; Dance</Link>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: '45px', height: '45px'}} />
                          <div className="ms-3">
                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                            <small>Teacher</small>
                          </div>
                        </div>
                        <span className="bg-primary text-white rounded-pill py-2 px-3" >$99</span>
                      </div>
                      <div className="row g-1">
                        <div className="col-4">
                          <div className="border-top border-3 border-primary pt-2">
                            <h6 className="text-primary mb-1">Age:</h6>
                            <small>3-5 Years</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-success pt-2">
                            <h6 className="text-success mb-1">Time:</h6>
                            <small>9-10 AM</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-warning pt-2">
                            <h6 className="text-warning mb-1">Capacity:</h6>
                            <small>30 Kids</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="classes-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                      <img className="img-fluid rounded-circle" src="img/classes-4.jpg" alt="" />
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                      <Link className="d-block text-center h3 mt-3 mb-4" to=''>Language &amp; Speaking</Link>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: '45px', height: '45px'}} />
                          <div className="ms-3">
                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                            <small>Teacher</small>
                          </div>
                        </div>
                        <span className="bg-primary text-white rounded-pill py-2 px-3" >$99</span>
                      </div>
                      <div className="row g-1">
                        <div className="col-4">
                          <div className="border-top border-3 border-primary pt-2">
                            <h6 className="text-primary mb-1">Age:</h6>
                            <small>3-5 Years</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-success pt-2">
                            <h6 className="text-success mb-1">Time:</h6>
                            <small>9-10 AM</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-warning pt-2">
                            <h6 className="text-warning mb-1">Capacity:</h6>
                            <small>30 Kids</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="classes-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                      <img className="img-fluid rounded-circle" src="img/classes-5.jpg" alt="" />
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                      <Link className="d-block text-center h3 mt-3 mb-4" to=''>Religion &amp; History</Link>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: '45px', height: '45px'}} />
                          <div className="ms-3">
                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                            <small>Teacher</small>
                          </div>
                        </div>
                        <span className="bg-primary text-white rounded-pill py-2 px-3" >$99</span>
                      </div>
                      <div className="row g-1">
                        <div className="col-4">
                          <div className="border-top border-3 border-primary pt-2">
                            <h6 className="text-primary mb-1">Age:</h6>
                            <small>3-5 Years</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-success pt-2">
                            <h6 className="text-success mb-1">Time:</h6>
                            <small>9-10 AM</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-warning pt-2">
                            <h6 className="text-warning mb-1">Capacity:</h6>
                            <small>30 Kids</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="classes-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                      <img className="img-fluid rounded-circle" src="img/classes-6.jpg" alt="" />
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                      <Link className="d-block text-center h3 mt-3 mb-4" to=''>General Knowledge</Link>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: '45px', height: '45px'}} />
                          <div className="ms-3">
                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                            <small>Teacher</small>
                          </div>
                        </div>
                        <span className="bg-primary text-white rounded-pill py-2 px-3">$99</span>
                      </div>
                      <div className="row g-1">
                        <div className="col-4">
                          <div className="border-top border-3 border-primary pt-2">
                            <h6 className="text-primary mb-1">Age:</h6>
                            <small>3-5 Years</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-success pt-2">
                            <h6 className="text-success mb-1">Time:</h6>
                            <small>9-10 AM</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-warning pt-2">
                            <h6 className="text-warning mb-1">Capacity:</h6>
                            <small>30 Kids</small>
                          </div>
                        </div>
                      </div>
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

export default ClassesComponent