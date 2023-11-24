import React from "react";

export default function NavBarHome({ showFullname = false }) {
  return (
    <div
      className="navbar-home nav w-nav snipcss0-0-0-1"
      data-animation="default"
      data-collapse="medium"
      data-contain="1"
      data-duration="400"
    >
      {!showFullname && (
        <a className="home-back" href="/">
          &lt; Home
        </a>
      )}
      <div className="w-container snipcss0-1-1-2">
        {showFullname && (
          <a
            className="w-nav-brand w--current snipcss0-2-2-3"
            href="/"
            previewlistener="true"
          >
            <div className="logo-text snipcss0-3-3-4">
              AMARANENI
              <strong data-new-link="true" className="snipcss0-4-4-5">
                NAVYASREE
              </strong>
            </div>
          </a>
        )}

        <nav
          className="nav-menu w-nav-menu w-preserve-3d snipcss0-2-2-6"
          role="navigation"
        >
          <a
            className="nav-link w-nav-link current w--current snipcss0-3-6-7 style-GMViQ"
            href="/"
            style={{ display: showFullname ? "visible" : "none" }}
            previewlistener="true"
            id="style-GMViQ"
          >
            Home
          </a>
          <a
            className="nav-link w-nav-link snipcss0-3-6-8 style-HvUam"
            href="about"
            previewlistener="true"
            id="style-HvUam"
          >
            About
          </a>
          <a
            className="nav-link w-nav-link snipcss0-3-6-9 style-tIhsg"
            href="resume"
            previewlistener="true"
            id="style-tIhsg"
          >
            Resume
          </a>
          <a
            className="contact nav-link w-nav-link snipcss0-3-6-10 style-n6rmj"
            data-ix="show-contact-overlay"
            href="contact"
            id="style-n6rmj"
          >
            Contact Me
          </a>
        </nav>
        <div className="menu-button w-nav-button snipcss0-2-2-11">
          <div className="w-icon-nav-menu snipcss0-3-11-12"></div>
        </div>
      </div>
      <div className="w-nav-overlay snipcss0-1-1-13" data-wf-ignore=""></div>
    </div>
  );
}
