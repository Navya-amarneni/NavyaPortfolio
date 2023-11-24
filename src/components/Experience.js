import React from "react";
import data from "./data/data";
import Description from "./utils/Description";
import NavBarHome from "./navbar/NavBarHome";

export default function Experiences() {
  const expData = data["experiences"];

  return (
    <div>
      <NavBarHome />
      <div className="resume-container">
        <h1> Work Experience </h1>
        </div>
      <div className="experiences">
        {expData.map((item) => {
          var [startDate, endDate] = item.dates;
          return (
            <div className="exp">
              <div className="exp-timeline">
                <div className="event">
                  <img src="https://imgs.search.brave.com/bffKgeZmu2cXP5V9j4K9n7luLKJo4ZeBtxmgpSGWq6U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9p/bnRlcm5ldC0td2Vi/L2NvbW1vbi1pY29u/cy1vZi1taWNyby10/ZXh0dXJlL3dvcmst/MTAucG5n" />
                  <i className="fa fa-briefcase"></i>
                </div>
              </div>

              <div key={item.id} className="experience-item">
                <div className="experience-item-text">
                  <div className="experience-heading">
                    <h1>{item.company}</h1>
                  </div>

                  <div className="experience-heading-description">
                    <h1>{item.designation}</h1>
                    <h2>
                      {item.dates.length > 1
                        ? `${startDate} - ${endDate}`
                        : `${startDate}`}
                    </h2>
                  </div>

                  <Description description_items={item.description} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
