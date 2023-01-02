import React from "react";
import { useEffect } from "react";
import "../About/About.css";
import ring1 from "../../assets/rings/tab 1.jpeg";
import ring2 from "../../assets/rings/tri stack1.jpeg";
import ring3 from "../../assets/rings/tri hoop combo.jpg";
import { BsThreeDots } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const aboutSection = document.querySelector("#about");
    const scrollTop = window.scrollY;
    if (location.pathname === "/") {
      scrollTop >= window.innerHeight
        ? aboutSection.classList.add("add-margin")
        : aboutSection.classList.remove("add-margin");
    } else aboutSection.classList.add("add-margin");
  };

  return (
    <section id="about" data-aos="fade" data-aos-duration="700">
      {/* <div className="spacer"></div> */}
      <div className="about-container">
        <div className="about-text">
          <div className="about-h1">
            <h1>About Midas Touch</h1>
            <BsThreeDots />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laborum dolor ratione quia quo, molestiae laudantium! Consectetur
            vitae nesciunt quos commodi assumenda ad, quidem velit. Assumenda
            mollitia repudiandae aspernatur veniam.
          </p>
        </div>
        <div className="about-img">
          <img className="img1" src={ring1} alt="" />
          <img className="img2" src={ring2} alt="" />
          <img className="img3" src={ring3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
