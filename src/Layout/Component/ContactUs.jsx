import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask'
// import validator from 'validator';
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import * as Yup from "yup";
import Hero from './Hero';

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            error: false,
            success: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    resetForm() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            error: false,
            success: false,
        });
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            error: false,
            success: false,
        });
    }

    emailValidator(email) {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) === false) {
            return !1;
        }
        return !0;
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("Going to submit form!!!!!!!!!!!!!!!!");
        const {firstName, email, phone, message} = this.state;
        console.log(this.state);
        if (firstName.trim().length === 0) {
            this.setState({error: true});
            return;
        } else if (email.trim().length === 0 || this.emailValidator(email) === !1) {
            this.setState({error: true});
            return;
        } else if (phone.trim().length === 0) {
            this.setState({error: true});
            return;
        } else if (message.trim().length === 0) {
            this.setState({error: true});
            return;
        }
        
        // if (validator.isEmpty(firstName) === true) {
        //     this.setState({error: true});
        //     return;
        // } else if (validator.isEmpty(lastName)) {
        //     this.setState({error: true});
        //     return;
        // } else if (validator.isEmail(email)) {
        //     this.setState({error: true});
        //     return;
        // } else if (validator.isEmpty(phone)) {
        //     this.setState({error: true});
        //     return;
        // } else if (validator.isEmpty(message)) {
        //     this.setState({error: true});
        //     return;
        // }

        const payload = {
            firstName: this.state.firstName.trim(),
            lastName: this.state.lastName.trim(),
            email: this.state.email.trim(),
            phone: this.state.phone.trim(),
            message: this.state.message.trim(),
        }
        
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/touch-in`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            this.setState({success: true});
            setTimeout(() => {
                window.location.href = "/contact-us";
                // this.resetForm();
            }, 2000);
        })
        .catch(err => {
            this.setState({error: true});
            setTimeout(() => {
                this.setState({error: false});
            }, 2000);
        });
    }

    render() {
        const { error, success } = this.state;
        return (
            <React.Fragment>
                <Hero />
                {/* <!-- ======= Contact Section ======= --> */}
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>Contact Us</h2>
                        </div>

                        <div className="row">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="contact-about">
                                <h3>Opichious</h3>
                                <p>
                                    Opichios works with pioneer technology associates to deliver the 
                                    best explanation to address our clients’ business needs. Our end-to-end 
                                    service portfolio is wrapped around this partner expertise. Our commitment 
                                    to excellence is founded upon a set of innate values that all Opichious 
                                    members respect and trust.
                                </p>
                                {/* <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p> */}
                                <div className="social-links">
                                    <a href="/" className="twitter"><i className="icofont-twitter"></i></a>
                                    <a href="/" className="facebook"><i className="icofont-facebook"></i></a>
                                    <a href="/" className="instagram"><i className="icofont-instagram"></i></a>
                                    <a href="/" className="linkedin"><i className="icofont-linkedin"></i></a>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                                <div className="info">
                                    <div>
                                        <i className="ri-map-pin-line"></i>
                                        <p>59 Sector, Mohali<br />India(PB) 160059</p>
                                        {/* <p>A108 Adam Street<br />New York, NY 535022</p> */}
                                    </div>

                                    <div>
                                        <i className="ri-mail-send-line"></i>
                                        <p>info@opichios.com</p>
                                    </div>

                                    <div>
                                        <i className="ri-phone-line"></i>
                                        <p>+91 9501 851 080</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- End Contact Section --> */}
            </React.Fragment>      
        )
    }
}