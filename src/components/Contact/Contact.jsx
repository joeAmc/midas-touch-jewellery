import React from "react";
import "../Contact/contact.css";
import { BsThreeDots } from "react-icons/bs";

const Contact = () => {
  return (
    <section data-aos="fade" data-aos-duration="800" id="contact">
      <div className="spacer"></div>
      <div
        // data-aos-anchor="#contact"

        className="form"
      >
        <form>
          <div className="form-h1">
            <h1>Contact us</h1>
            <BsThreeDots />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="text" name-="email" placeholder="Your email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="6"
            placeholder="Enter a message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
