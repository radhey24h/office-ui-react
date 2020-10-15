import React, { Component } from 'react';
import Hero from './Hero';
import ServicesSection from './ServicesSection';

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
          <Hero />
          <ServicesSection />

          {/* <!-- ======= More Services Section ======= --> */}
          <section id="more-services" className="more-services">
            <div className="container">

              <div className="row">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="card" style={{backgroundImage:  'url("assets/img/more-services-1.jpg")'}} data-aos="fade-up" data-aos-delay="100">
                    <div className="card-body">
                      <h5 className="card-title">Digital Marketing</h5>
                      <p className="card-text">
                        Investments in marketing continue to be a priority for businesses across 
                        the board, as they strive to meet increased demands for personalization and 
                        a need to collect, authenticate and analyze rapidly increasing data.
                      </p>
                      <div className="read-more"></div>
                      {/* <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div className="card" style={{backgroundImage:  'url("assets/img/more-services-2.jpg")'}} data-aos="fade-up" data-aos-delay="200">
                    <div className="card-body">
                      <h5 className="card-title">e-Commerce</h5>
                      <p className="card-text">
                        Our goal is to provide you with the tools and resources you need to 
                        build, innovate and grow your ecommerce business.
                      </p>
                      <div className="read-more"></div>
                      {/* <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div> */}
                    </div>
                  </div>

                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4">
                  <div className="card" style={{backgroundImage: 'url("assets/img/more-services-3.jpg")'}} data-aos="fade-up" data-aos-delay="100">
                    <div className="card-body">
                      <h5 className="card-title">Native Mobile Application</h5>
                      <p className="card-text">
                        When businesses first consider large-scale investments like mobile app development, 
                        the cost is often one of the most important deciding factors in whether a project 
                        will get the proverbial “green light.”
                      </p>
                      <div className="read-more"></div>
                      {/* <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4">
                  <div className="card" style={{backgroundImage:  'url("assets/img/more-services-4.jpg")'}} data-aos="fade-up" data-aos-delay="200">
                    <div className="card-body">
                      <h5 className="card-title">Sales Strategy</h5>
                      <p className="card-text">
                        You've been speaking with a prospect for a while and you have a sense of their goals 
                        and challenges—it seems like your offering is a great fit for their business.
                      </p>
                      <div className="read-more"></div>
                      {/* <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div> */}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
          {/* <!-- End More Services Section --> */}

        
          {/* <!-- ======= Features Section ======= --> */}
          {/* <section id="features" className="features">
            <div className="container">

              <div className="section-title" data-aos="fade-up">
                <h2>Features</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
              </div>

              <div className="row" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-3 col-md-4">
                  <div className="icon-box">
                    <i className="ri-store-line" style={{color: '#ffbb2c'}}></i>
                    <h3><a href="">Lorem Ipsum</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div className="icon-box">
                    <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
                    <h3><a href="">Dolor Sitema</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div className="icon-box">
                    <i className="ri-calendar-todo-line" style={{color: '#e80368'}}></i>
                    <h3><a href="">Sed perspiciatis</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <i className="ri-paint-brush-line" style={{color: '#e361ff'}}></i>
                    <h3><a href="">Magni Dolores</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-database-2-line" style={{color: '#47aeff'}}></i>
                    <h3><a href="">Nemo Enim</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-gradienter-line" style={{color: '#ffa76e'}}></i>
                    <h3><a href="">Eiusmod Tempor</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-file-list-3-line" style={{color: '#11dbcf'}}></i>
                    <h3><a href="">Midela Teren</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-price-tag-2-line" style={{color: '#4233ff'}}></i>
                    <h3><a href="">Pira Neve</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-anchor-line" style={{color: '#b2904f'}}></i>
                    <h3><a href="">Dirada Pack</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-disc-line" style={{color: '#b20969'}}></i>
                    <h3><a href="">Moton Ideal</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-base-station-line" style={{color: '#ff5828'}}></i>
                    <h3><a href="">Verdo Park</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-fingerprint-line" style={{color: '#29cc61'}}></i>
                    <h3><a href="">Flavor Nivelanda</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!-- End Features Section --> */}
      </React.Fragment>
    )
  }
}