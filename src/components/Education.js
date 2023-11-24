import React from "react";
import data from "./data/data";
import NavBarHome from "./navbar/NavBarHome";
export default function Education() {
  const edData = data["education"];

  return (
    <div>
      <NavBarHome />
      <div className="resume-container">
        <h1> Education </h1>
      </div>
      <div className="education">
        {edData.map((item) => {
          var [startDate, endDate] = item.dates;
          const styledComponent = item.id % 2 === 0;
          const block1 = styledComponent
            ? {
                marginLeft: "694px",
              }
            : {};
          const block2 = styledComponent
            ? {
                position: "absolute",
                marginLeft: "590px",
              }
            : {};
          const block3 = styledComponent
            ? {
              position: "absolute",
              marginLeft: "487px",
              }
            : {};

          return (
            <div className="education-block" key={item.id}>
              <div className="education-item" style={block1}>
                <div className="education-heading">
                  <h1>
                    {item.organization} |{" "}
                    {item.dates.length > 1
                      ? `${startDate} - ${endDate}`
                      : `${startDate}`}
                    <span className="education-grade">
                      {item.grade} / {item.total_grade}
                    </span>
                  </h1>
                </div>
                <p>{item.degree}</p>
                <p>{item.location}</p>
              </div>
              <div className="edc-timeline" style={block2}>
                <div className="event">
                  <img src="https://c1.klipartz.com/pngpicture/632/851/sticker-png-google-logo-icon-design-google-scholar-scholarship-education-student-user-page-daccueil.png" />
                  <i className="fa fa-briefcase"></i>
                </div>
              </div>
              <img style={block3} src={item.imgURL} alt="image_text" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
