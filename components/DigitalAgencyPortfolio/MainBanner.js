import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    dots: false,
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ]
};

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {display ? <OwlCarousel 
                className="agency-portfolio-home-slides owl-carousel owl-theme"
                {...options}
            > 

                <div className="agency-portfolio-main-banner portfolio-banner-bg3">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="portfolio-banner-content">
                                    <span className="sub-title">We are FINIC</span>
                                    <h1>Software Solutions</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <a href="#" className="btn btn-secondary">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </>
    )
}

export default MainBanner;  