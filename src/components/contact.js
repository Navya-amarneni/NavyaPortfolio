import React from "react";
import "../components/css/contact.css";
import NavBarHome from "./navbar/NavBarHome";

const Contact = () => {
  return (
    <div className="contact-container">
      <NavBarHome />
      <section className="contact spad snipcss-OTkST">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.4169110597663!2d79.97606757358709!3d14.913848319333809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7b8eef7d7785%3A0x5ed3b3b2341f1263!2sBapuji%20Nagar%2C%20Kavali%2C%20Andhra%20Pradesh%20524201!5e0!3m2!1sen!2sin!4v1700754946156!5m2!1sen!2sin"
                  height="450"
                  id="style-53LzN"
                  className="style-53LzN"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <h3>Get in touch!</h3>
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Website" />
                  <textarea
                    placeholder="Message"
                    data-gramm="false"
                    wt-ignore-input="true"
                  />
                  <button
                    type="submit"
                    className="contact nav-link w-nav-link snipcss0-3-6-10 style-n6rmj"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
