import React, { Component } from 'react';
import PropTypes from 'prop-types';
// https://www.fingent.com/
// https://www.pwc.com/gx/en/industries/technology/publications/global-100-software-leaders/explore-the-data.html
// https://www.forbes.com/top-digital-companies/list/
// https://www.microstrategy.com/us
// https://en.totvs.com/

// content goes from here
// https://synergytop.com/
// https://www.effectivesoft.com/
// https://www.cabotsolutions.com/
// https://www.eliftech.com/
// https://www.nomtek.com/
// https://www.chapter247.com/
// https://www.juegostudio.com/
// https://limegrow.com/
// https://www.zibtek.com/
// https://www.brainshark.com/
// import MainCarousel from './Carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero from './Hero';
import ServicesSection from './ServicesSection';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero />
                <main id="main">

                    {/* <!-- ======= Clients Section ======= --> */}
                    <section id="clients" className="clients clients">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src="/assets/img/clients/client-1.png" className="img-fluid" alt="" data-aos="zoom-in" />
                                </div>

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100" />
                                </div>

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200" />
                                </div>

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300" />
                                </div>

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400" />
                                </div>

                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500" />
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* <!-- End Clients Section --> */}

                    <ServicesSection />

                    {/* <!-- ======= Testimonials Section ======= --> */}
                    <section id="testimonials" className="testimonials section-bg">
                        <div className="container">

                            <div className="section-title" data-aos="fade-up">
                                <h2>Testimonials</h2>
                                <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
                            </div>

                            <div className="owl-carousel testimonials-carousel" data-aos="fade-up" data-aos-delay="200">

                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>

                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>

                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>

                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>

                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* <!-- End Testimonials Section --> */}
                </main>
            </React.Fragment>
        )
    }
}

Home.propTypes = {
    index: PropTypes.string,
}