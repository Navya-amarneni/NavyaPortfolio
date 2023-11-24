import React from "react";
import NavbarItems from "./NavBarItems";

export default function ComponentNavBar({ title }) {
  return (
    <nav className="navbar component-navbar">
      <a href="/">
        <h1>
          <span className="navbar-component-icon">&lt;</span> Home
        </h1>
      </a>
      <h1 className="component-navbar-title">{title}</h1>
      <NavbarItems />
    </nav>
  );
}
