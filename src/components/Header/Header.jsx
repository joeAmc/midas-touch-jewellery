import React from "react";
import { useEffect } from "react";
import "../Header/header.css";
import "../Banner/banner.css";
import Logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

const Header = () => {
  const location = useLocation();

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // useEffect(() => {
  //   const divHeight = document.querySelector(".banner-img").clientHeight;

  //   const navStart = () => {
  //     if (location.pathname === "/" && window.scrollY > divHeight) {
  //       setHeader(true);
  //     } else if (location.pathname !== "/") {
  //       setHeader(true);
  //     } else {
  //       setHeader(false);
  //     }
  //   };

  //   window.addEventListener("scroll", navStart);
  //   return () => window.EventListener("scroll", navStart);
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    if (location.pathname === "/") {
      scrollTop >= window.innerHeight
        ? header.classList.add("active")
        : header.classList.remove("active");
    } else header.classList.add("active");
  };

  return (
    // <div className="header">
    <div className="header">
      <Link to="/">
        <img onClick={scrollTop} src={Logo} alt="logo" />
      </Link>
      <div className="header-text">
        <h1>Midas Touch</h1>
        {(() => {
          if (location.pathname === "/") {
            return (
              <div className="nav">
                <div className="about-link">
                  <a href="#about">
                    <h3>About</h3>
                    <BsThreeDots />
                  </a>
                </div>
                <div className="collect-link">
                  <a href="#collections">
                    <h3>Collections</h3>
                    <BsThreeDots />
                  </a>
                </div>
                <div className="contact-link">
                  <a href="#contact">
                    <h3>Contact</h3>
                    <BsThreeDots />
                  </a>
                </div>
              </div>
            );
          } else if (location.pathname === "/rings") {
            return (
              <div className="nav">
                <div className="about-link">
                  <Link onClick={scrollTop} to="/">
                    <h3>Home</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} to="/earrings">
                    <h3>Earrings</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} to="/necklaces">
                    <h3>Necklaces</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="contact-link">
                  <a href="#contact">
                    <h3>Contact</h3>
                    <BsThreeDots />
                  </a>
                </div>
              </div>
            );
          } else if (location.pathname === "/earrings") {
            return (
              <div className="nav">
                <div className="about-link">
                  <Link onClick={scrollTop} to="/">
                    <h3>Home</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} to="/rings">
                    <h3>Rings</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} to="/necklaces">
                    <h3>Necklaces</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="contact-link">
                  <a href="#contact">
                    <h3>Contact</h3>
                    <BsThreeDots />
                  </a>
                </div>
              </div>
            );
          } else {
            return (
              <div className="nav">
                <div className="about-link">
                  <Link onClick={scrollTop} to="/">
                    <h3>Home</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} to="/rings">
                    <h3>Rings</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} to="/earrings">
                    <h3>Earrings</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="contact-link">
                  <a href="#contact">
                    <h3>Contact</h3>
                    <BsThreeDots />
                  </a>
                </div>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default Header;
