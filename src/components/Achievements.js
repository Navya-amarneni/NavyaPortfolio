import React from "react";
import data from "./data/data";
import NavBarHome from "./navbar/NavBarHome";

export default function Achievements() {
  const achData = data["achievements"];

  return (
    <div>
      <NavBarHome />
      <div className="resume-container">
        <h1> Achievements </h1>
      </div>
      <div className="achievements">
        <div className="ach-block">
          {achData.map((item) => {
            return (
              <div className="exp">
                <div className="proj-timeline">
                  <div className="event">
                    <img src="https://imgs.search.brave.com/S6yuL584nnxq91IA6P3iQY1F4DaweRBS_jXhbeXD0ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zeW1i/bC13b3JsZC5ha2Ft/YWl6ZWQubmV0L2kv/d2VicC8yZS8wYzZm/Zjg3ODkwMzJhZTlm/NDg0MjgwZmQ5OGFj/NzQud2VicA" />
                    <i className="fa fa-briefcase"></i>
                  </div>
                </div>
                <p key={item.id} className="ach-item">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
