import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <div className="logo mr-auto">
                        {/* <h1 className="text-light">
                            <a href="index.html"> <span>Opichious</span> </a>
                        </h1> */}
                        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                        <a href="/">
                            <img src="assets/img/logos/logo1.png"
                                width="100" height="80"
                                alt="Opichious"
                                className="img-fluid" />
                        </a>
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/about">About</a></li>
                            {/* <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            {/* <li className="drop-down"><a href="">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="drop-down"><a href="#">Drop Down 2</a>
                                        <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                    <li><a href="#">Drop Down 5</a></li>
                                </ul>
                            </li> */}
                            <li><a href="/contact-us">Contact</a></li>
                            {/* <li className="get-started"><a href="#about">Get Started</a></li> */}
                        </ul>
                    </nav> {/* <!-- .nav-menu --> */}
                </div>
            </header>  
        )
    }
}
