import React, { Component } from 'react';
import Hero from './Hero';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />

        {/* <!-- ======= About Us Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>About Us</h2>
            </div>

            <div className="row content">
              <div className="col-lg-12" data-aos="fade-up" data-aos-delay="150">
                <p>
                  Opichios works with pioneer technology associates to deliver the 
                  best explanation to address our clients’ business needs. Our end-to-end 
                  service portfolio is wrapped around this partner expertise. Entering in 
                  our circle of innovation connects administrations to our extended network 
                  of advanced tools and technology. Our commitment to excellence is founded 
                  upon a set of innate values that all Opichious members respect and trust.
                </p>
                <p>
                  We believe in delivering high quality products.The growth of our company shows
                  “What we say, we deliver”.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Web Development </li>
                  <li><i className="ri-check-double-line"></i> Mobile Development </li>
                  <li><i className="ri-check-double-line"></i> Web & Graphics Design </li>
                  <li><i className="ri-check-double-line"></i> Data Analysis </li>
                  <li><i className="ri-check-double-line"></i> Machine & Deep Learning </li>
                  <li><i className="ri-check-double-line"></i> Artifical Intelligence (AI) </li>
                  <li><i className="ri-check-double-line"></i> Digital Marketing </li>
                  <li><i className="ri-check-double-line"></i> Search Engine Optimization (SEO) </li>
                </ul>
              </div>
            </div>

            {/* <div className="row content">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="btn-learn-more">Learn More</a>
              </div>
            </div> */}
          </div>
        </section> 
        {/* <!-- End About Us Section --> */}

        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" className="counts">
          <div className="container">
            <div className="row">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                  <img src="assets/img/counts-img.svg" alt="" className="img-fluid" />
              </div>

              <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                <div className="content d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="icofont-simple-smile"></i>
                        <span data-toggle="counter-up">65</span>
                        <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="icofont-document-folder"></i>
                        <span data-toggle="counter-up">85</span>
                        <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="icofont-clock-time"></i>
                        <span data-toggle="counter-up">12</span>
                        <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="icofont-award"></i>
                        <span data-toggle="counter-up">15</span>
                        <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End .content--> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Counts Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" className="team section-bg">
          <div className="container">

            <div className="section-title" data-aos="fade-up">
              <h2>Team</h2>
              {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p> */}
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <img src="assets/img/team/surinder.jpg" className="img-fluid1" alt="Surinder" />
                    <div className="social">
                      <a href="#"><i className="icofont-twitter"></i></a>
                      <a href="#"><i className="icofont-facebook"></i></a>
                      <a href="#"><i className="icofont-instagram"></i></a>
                      <a href="#"><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Surinder Batti</h4>
                    <span>Co-Founder & Chief Executive Officer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <img src="assets/img/team/manoj.jpg" className="img-fluid1" alt="Manoj" />
                    <div className="social">
                      <a href="#"><i className="icofont-twitter"></i></a>
                      <a href="#"><i className="icofont-facebook"></i></a>
                      <a href="#"><i className="icofont-instagram"></i></a>
                      <a href="#"><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Manoj Kumar</h4>
                    <span>Co-Founder & Chief Techinal Officer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="member-img">
                    <img src="assets/img/team/shekhar.jpg" className="img-fluid1" alt="Shekhar" />
                    <div className="social">
                      <a href=""><i className="icofont-twitter"></i></a>
                      <a href=""><i className="icofont-facebook"></i></a>
                      <a href=""><i className="icofont-instagram"></i></a>
                      <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Shekahar Kumar</h4>
                    <span>Co-Founder & Chief Techinal Officer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="icofont-twitter"></i></a>
                      <a href=""><i className="icofont-facebook"></i></a>
                      <a href=""><i className="icofont-instagram"></i></a>
                      <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="icofont-twitter"></i></a>
                      <a href=""><i className="icofont-facebook"></i></a>
                      <a href=""><i className="icofont-instagram"></i></a>
                      <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="member-img">
                    <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="icofont-twitter"></i></a>
                      <a href=""><i className="icofont-facebook"></i></a>
                      <a href=""><i className="icofont-instagram"></i></a>
                      <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="400">
                  <div className="member-img">
                    <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="icofont-twitter"></i></a>
                      <a href=""><i className="icofont-facebook"></i></a>
                      <a href=""><i className="icofont-instagram"></i></a>
                      <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>

            </div> */}
          </div>
        </section>
        {/* <!-- End Team Section --> */}

        {/* <!-- ======= Technologies Section ======= --> */}
        <section id="features" className="features">
          <div className="container">

            <div className="section-title" data-aos="fade-up">
              <h2>Technologies</h2>
              {/* <p>We are expert in the following technologies.</p> */}
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="300">
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <i className="ri-store-line" style={{color: '#ffbb2c'}}></i>
                  <h3 title="Python">Python</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
                  <h3 title="Django">Django</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="ri-calendar-todo-line" style={{color: '#e80368'}}></i>
                  <h3 title="Flask">Flask</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="ri-paint-brush-line" style={{color: '#29cc61'}}></i>
                  <h3 title="Ruby on Rails">Ruby on Rails</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-database-2-line" style={{color: '#47aeff'}}></i>
                  <h3 title="Node">Node</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-paint-brush-line" style={{color: '#e361ff'}}></i>
                  <h3 title="React">React</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-file-list-3-line" style={{color: '#11dbcf'}}></i>
                  <h3 title="Angular">Angular</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-gradienter-line" style={{color: '#ffa76e'}}></i>
                  <h3 title="Vue">Vue</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-paint-brush-line" style={{color: '#29cc61'}}></i>
                  <h3 title="PHP">PHP</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-price-tag-2-line" style={{color: '#4233ff'}}></i>
                  <h3 title="Wordpress">Wordpress</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-anchor-line" style={{color: '#b2904f'}}></i>
                  <h3 title="Woocommerce">Woocommerce</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-disc-line" style={{color: '#b20969'}}></i>
                  <h3 title="Shopify">Shopify</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-calendar-todo-line" style={{color: '#e80368'}}></i>
                  <h3 title="Artifical Intelligence">Artifical Intelligence</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-base-station-line" style={{color: '#ff5828'}}></i>
                  <h3 title="Machine Learning">Machine Learning</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-fingerprint-line" style={{color: '#29cc61'}}></i>
                  <h3 title="Big Data">Big Data</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Technologies Section --> */}

      </React.Fragment>
    )
  }
}