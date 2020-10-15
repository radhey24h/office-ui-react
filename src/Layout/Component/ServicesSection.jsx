import React, { Component } from 'react';

export default class ServicesSection extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <!-- ======= Services Section ======= --> */}


                <section id="services" className="services">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>Services</h2>
                            <p>
                                We offers services to grow your business.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4 className="title">Web Development</h4>
                                    <p className="description">
                                        Opichious offers all kinds of custom built websites, web portals and 
                                        web applications. We use advanced technologies to ensure that our solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4 className="title"> Mobile Development </h4>
                                    <p className="description">
                                        Opichious offer the best user experience is what our team of mobile app 
                                        development. We develop & design all kinds of mobile apps for iOS, 
                                        Android, Native etc. depending on your business.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4 className="title"> Web & Graphics Design </h4>
                                    <p className="description">
                                        Creative and attractive interfaces are the soul of any designs. 
                                        We will help design custom user interfaces based on your business 
                                        requirements including mobile apps and desktops.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4 className="title"> Data Analysis </h4>
                                    <p className="description">
                                        Data analytics helps businesses convert their historical and real-time, 
                                        traditional and big data into actionable insights.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="services" className="services">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>Services</h2>
                            <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon"><i className="bx bx-tachometer"></i></div>
                                <h4 className="title"><a href="">Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon"><i className="bx bx-world"></i></div>
                                <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <!-- End Services Section --> */}
            </React.Fragment>
        )
    }
}