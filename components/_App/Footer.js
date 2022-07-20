import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link href="/it-startup">
                  <a>
                    <img src="/images/finic-logo.png" alt="logo" width={50} />
                  </a>
                </Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>Company</h3>
              <ul className="list">
                <li>
                  <Link href="/about-1">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-1">
                    <a>Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Business Hours</h3>
              <ul className="list">
                <li>
                  <a>Monday to Friday, between 9:00 and 18:00 </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Address</h3>

              <ul className="footer-contact-info">
                <li>
                  <Icon.MapPin />
                  Van Riemsdijkweg 62 3088 HD Rotterdam, Netherlands
                </li>
                <li>
                  <Icon.Mail />
                  Email: <a href="mailto:startp@gmail.com">info@finic.nl</a>
                </li>
                <li>
                  <Icon.PhoneCall />
                  Phone: <a href="tel:321984754">+31 6 43638392</a>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/Finicnl/"
                    className="facebook"
                    target="_blank"
                  >
                    <Icon.Facebook />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/finic.nl"
                    className="instagram"
                    target="_blank"
                  >
                    <Icon.Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/finicnl/"
                    className="linkedin"
                    target="_blank"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>
                Copyright &copy; {currentYear} Finic. All rights reserved by{" "}
                <a href="https://finic.nl" target="_blank">
                  Finic
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src="/images/map.png" className="map" alt="map" />

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </footer>
  );
};

export default Footer;
