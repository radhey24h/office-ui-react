import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (

            <footer id="footer">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                {/* <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p> */}
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Opichious</h3>
                                <p>
                                    59 Sector Mohali, <br />
                                    India (PB), 160059 <br /><br />
                                    <strong>Phone:</strong> +91 9501 851 080<br />
                                    <strong>Email:</strong> info@opictious.com<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/services">Services</a></li>
                                    {/* <li><i className="bx bx-chevron-right"></i> <a href="/blogs">Blogs</a></li> */}
                                    <li><i className="bx bx-chevron-right"></i> <a href="/about">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/terms">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/privacy">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/services">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/services">Mobile Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/services">Web & Graphic Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/services">Artificial Intelligence (AI)</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/services">Machine Learning (ML)</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/services">Digital Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/services">Search Engine Optimization (SEO)</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>You can contact us via social media.</p>
                                {/* <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p> */}
                                <div className="social-links mt-3">
                                    <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    {/* <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a> */}
                                    <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright 2020. All Rights Reserved
                    </div>
                </div>
            </footer>

        )
    }
}
            // <footer id="footer">
            //     <div className="container">
            //     <div className="row d-flex align-items-center">
            //         <div className="col-lg-6 text-lg-left text-center">
            //         <div className="copyright">
            //             &copy; Copyright <strong>Opichious</strong>. All Rights Reserved
            //         </div>
            //         <div className="credits">
            //         </div>
            //         </div>
            //         <div className="col-lg-6">
            //         <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            //             <a href="#intro" className="scrollto">Home</a>
            //             <a href="#about" className="scrollto">About</a>
            //             <a href="#">Privacy Policy</a>
            //             <a href="#">Terms of Use</a>
            //         </nav>
            //         </div>
            //     </div>
            //     </div>
            // </footer>