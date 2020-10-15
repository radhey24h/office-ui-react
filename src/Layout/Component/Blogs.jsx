import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Blogs extends Component {
    render() {
        return (
            <div className="outer-wrapper plans-page">
                <div className="banner-section">
                    <h1 className="page-title">Blogs</h1>
                </div>
                <div className="common-section">
                    <div className="main-wrapper">
                        <div className="row custom-row">
                            <div className="col-md-5 col-sm-6">
                                <section className="about-section">
                                    <h2 className="small-border">Your bookkeeping partner</h2>
                                    <div className="simple-para">
                                        Real Estate Bookkeeping Services Canada is a cloud-based bookkeeping service designed by real
                                        estate investors for real estate investors. We have designed the system to be seamless and
                                        effortless, allowing you to submit your paperwork and receipts, as well as access your books
                                        from anywhere in the world, at any time. Our mission is to take care of your bookkeeping so
                                        you can focus working on your business rather than in your business.
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-7 col-sm-6 about-img">
                                <img src="/assets/images/about.png" width="679" height="347" alt="About Us" className="img-fluid rounded"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="push"></div>
            </div>
        )
    }
}

Blogs.propTypes = {
    index: PropTypes.string,
}