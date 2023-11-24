import React from "react";
import "../components/css/About.css";
import NavBarHome from "./navbar/NavBarHome";

export default function About() {
  return (
    <div
      id="fh5co-about"
      className="about-page animate-box fadeInUp animated-fast snipcss-a9onX"
      >
          <NavBarHome />
      <div className="container">
        <div className="aboutme-row">
          <img
            className="aboutme-img"
            src="https://raw.githubusercontent.com/Navya-amarneni/MyPortfolio/main/pp-modified.png"
          ></img>

          <div className="aboutme">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="info">
              <li>
                <span className="first-block">Full Name:</span>
                <span className="second-block">Amaraneni Navya sree</span>
              </li>
              <li>
                <span className="first-block">Phone:</span>
                <span className="second-block">+91 9381218280</span>
              </li>
              <li>
                <span className="first-block">Email:</span>
                <span className="second-block">navyasree.8.2001@gmail.com</span>
              </li>
              <li>
                <span className="first-block">Alternate email:</span>
                <span className="second-block">navya.8.2001@gmail.com</span>
              </li>
              <li>
                <span className="first-block">Address:</span>
                <span className="second-block">
                  Bapuji Nagar, Kavali, Nellore, Andhra Pradesh 524201.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2>Hello There!</h2>
            <p>
              I am Navya, a full stack developer with 1+ year of professional
              experience, one year internship experience. I love to develop
              stuff that creates solutions to real-world problems.
            </p>

            <p></p>
            <ul className="fh5co-social-icons">
              <li>
                <a href="https://www.facebook.com/navya.amarneni/">
                  <i className="icon-facebook3"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/navya-sree-a836a418b/">
                  <i className="icon-linkedin2"></i>
                </a>
              </li>
              <li>
                <a href="https://codeforces.com/profile/Ngc19">
                  <i className="icon-dribbble2"></i>
                </a>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
