import React,{ Component } from 'react';
// import { Carousel } from 'react-responsive-carousel';

class MainCarousel extends Component {
    render() {
        return (
            <div className="layout-fluid-container">
                <div className="one-time slick-initialized slick-slider">
                    <div className="slick-list draggable" style={{height: '395px'}}>
                        <div className="slick-track" style={{opacity: 1, width: '8897px', transform: 'translate3d(-1271px, 0px, 0px)'}}>
                            <div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1" style={{width: '1271px'}}>
                                <div className="slider-inner-text">
                                    <h1>Certified and Experienced Full Stack Developers</h1>
                                    <p>Our full stack developers offer a cost-effective option to save time. Money and resources.</p>
                                </div>
                                <img src="https://www.cabotsolutions.com/public/certified-developers.jpg" alt="" />
                            </div>
                            <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="0" style={{width: '1271px'}}>
                                <div className="slider-inner-text">
                                    <h1>Software Development Solution</h1>
                                    <p>Build and launch your product with an experienced and dependable team.</p>
                                </div>
                                <img src="https://www.cabotsolutions.com/public/software-development.jpg" alt="" />
                            </div>
                            <div className="slick-slide" data-slick-index="1" aria-hidden="true" tabIndex="-1" style={{width: '1271px'}}>
                                <div className="slider-inner-text">
                                    <h1>Software Development Outsourcing</h1>
                                    <p>Got projects but limited resources? Increase your software development capacity with us!</p>
                                </div>
                                <img src="https://www.cabotsolutions.com/public/software-outsourcing.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default MainCarousel;
            // <Carousel autoPlay>
            //     <div>
            //         <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" alt="Kelly" />
            //         <p className="legend">Legend 1</p>
            //     </div>
            //     <div>
            //         <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" alt="ChadRichard" />
            //         <p className="legend">Legend 2</p>
            //     </div>
            //     <div>
            //         <img src="http://react-responsive-carousel.js.org/assets/3.jpeg" alt="Hutch" />
            //         <p className="legend">Legend 3</p>
            //     </div>
            // </Carousel>