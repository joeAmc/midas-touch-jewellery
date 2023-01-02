import React from "react";
import "../Banner/banner.css";
// import banner from "../../assets/banner.jpg";
import Logo from "../../assets/Logo.png";

const Banner = () => {
  return (
    <section>
      <div className="banner-container">
        {/* <img className="banner-img" src={banner} alt="" /> */}
        <div className="banner-content">
          <img className="banner-logo" src={Logo} alt="" />
          <h1>Midas Touch Jewellery</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
