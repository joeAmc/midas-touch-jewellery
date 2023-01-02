import React from "react";
import "../Collections/collections.css";
import { Link } from "react-router-dom";
import Ring from "../../assets/rings/tri stack2.jpg";
import Earring from "../../assets/rings/midas earrings.jpg";
import { BsThreeDots } from "react-icons/bs";

const Collections = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section
      data-aos="fade"
      // data-aos-anchor-placement="top-center"

      data-aos-duration="800"
      // data-aos-offset="100"
      id="collections"
    >
      <div className="spacer"></div>
      {/* <h2>See Collection</h2> */}
      <div className="collections-container">
        <div className="rings-container">
          <Link to="/rings">
            <div className="rings-h1">
              <h1 onClick={scrollTop}>Rings</h1>
              <BsThreeDots />
            </div>
            <div className="rings">
              <img onClick={scrollTop} src={Ring} alt="" />
            </div>
          </Link>
        </div>
        <div className="earrings-container">
          <Link to="/earrings">
            <div className="earrings">
              <img onClick={scrollTop} src={Earring} alt="" />
            </div>
            <div className="earring-h1">
              <h1 onClick={scrollTop}>Earrings</h1>
              <BsThreeDots />
            </div>
          </Link>
        </div>
        <div className="necklaces-container">
          <Link to="/necklaces">
            <div className="necklaces-h1">
              <h1 onClick={scrollTop}>Necklaces</h1>
              <BsThreeDots />
            </div>
            <div className="necklaces">
              <img onClick={scrollTop} src={Ring} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;
