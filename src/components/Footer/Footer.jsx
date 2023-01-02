import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/Logo.png";
import "../Footer/footer.css";
import { FaEtsy } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div className="spacer"></div>
        <div className="footer">
          <div className="footer-items">
            <Link to="/">
              <img onClick={scrollTop} src={Logo} alt="logo" />
            </Link>
            <ul className="footer-links">
              <li>
                <Link to="/#about">
                  <h3 onClick={scrollTop}>About</h3>
                </Link>
              </li>
              <li>
                <Link to="/rings">
                  <h3 onClick={scrollTop}>Rings</h3>
                </Link>
              </li>
              <li>
                <Link to="/earrings">
                  <h3 onClick={scrollTop}>Earrings</h3>
                </Link>
              </li>
              <li>
                <Link to="/necklaces">
                  <h3 onClick={scrollTop}>Necklaces</h3>
                </Link>
              </li>
              <li>
                <a href="#contact">
                  <h3>Contact</h3>
                </a>
              </li>
            </ul>
            <div className="footer-icons">
              <a href="https://www.etsy.com/uk/shop/MidasTouchJeweller?ref=simple-shop-header-name&listing_id=1246783193">
                <FaEtsy />
              </a>
              <a href="https://www.instagram.com/">
                <FiInstagram />
              </a>
            </div>
            <div className="copyright">
              <h5>&copy; Midas Touch Jeweller. All rights reserved</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
