import React from 'react'
// import { Link } from "react-router-dom"
import gchild from "../../assets/img/joybellsimg/gchild.jpg"
import happyholi from "../../assets/img/joybellsimg/happyholi.jpg"
import playground from "../../assets/img/joybellsimg/playground.jpg"

function BannerComponents() {
  return (
    <React.Fragment>
        <div id="carouselExampleAutoplaying" className="carousel slide owl-carousel header-carousel position-relative" data-bs-ride="carousel" >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={gchild} className="d-block w-100" height={450} alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={happyholi} className="d-block w-100" height={450} alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={playground} className="d-block w-100" height={450} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>



         {/* <div className="container-fluid p-0 mb-5">
            <div className="owl-carousel header-carousel position-relative">
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="../../assets/img/carousel-1.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(0, 0, 0, .2)'}}>
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-10 col-lg-8">
                        <h1 className="display-2 text-white animated slideInDown mb-4">The Best Kindergarten School For Your Child</h1>
                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <Link to='/learnmore' className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                        <Link to='/classes' className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src='E:\Templatesssssssssssss\joybells\frontend\src\assets\img\carousel-1.jpg' alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(0, 0, 0, .2)'}}>
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-10 col-lg-8">
                        <h1 className="display-2 text-white animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>
                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <Link to='' className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                        <Link to='' className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="https://www.usnews.com/dims4/USNEWS/ab135d1/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe9%2Ffd%2F042a5ddc4b2785aeabe7d084d42d%2Fmontessori.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(0, 0, 0, .2)'}}>
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-10 col-lg-8">
                        <h1 className="display-2 text-white animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>
                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <Link to='' className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                        <Link to='' className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
               <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="https://ace-montessori.com/wp-content/uploads/2019/06/montessori.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(0, 0, 0, .2)'}}>
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-10 col-lg-8">
                        <h1 className="display-2 text-white animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>
                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <Link to='' className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                        <Link to='' className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
           </div> */}
    </React.Fragment>
  )
}

export default BannerComponents