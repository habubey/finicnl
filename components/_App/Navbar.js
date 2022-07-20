import React from "react";
import Link from "@/utils/ActiveLink";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/it-startup">
              <a onClick={toggleNavbar} className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
       
                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Home
                    </a>
                  </Link>
                  </li>
                <li className="nav-item">
                  <Link href="/about" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      About
                    </a>
                  </Link>
                  </li>
                <li className="nav-item">
                  <Link href="/contact" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
