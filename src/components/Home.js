import React from "react";
import NavBarHome from "./navbar/NavBarHome";

export default function Home() {
  return (
    <div className="hero-section home-page-hero snipcss-K85mb">
      <NavBarHome showFullname={true} />
      <h1
        className="home-page-heading style-XUA1E typing-text"
        data-ix="hero-text"
        id="style-XUA1E"
      >
        Hi. I am a developer.
      </h1>
      <p className="description-about">
        I specialize in Full-stack development projects, with expertise in
        competitive programming, data structures and algorithms. I bring
        enthusiasm and strong problem-solving skills to contribute to team
        success, thriving in dynamic environments that allow me to showcase my
        abilities.
      </p>
      <div className="hero-overlay style-yGYHZ" id="style-yGYHZ"></div>
      <a
        className="contact nav-link w-nav-link snipcss0-3-6-10 style-n6rmj get-started"
        data-ix="show-contact-overlay"
        href="#cards"
        id="style-n6rmj"
      >
        GET STARTED
      </a>
    </div>
  );
}
