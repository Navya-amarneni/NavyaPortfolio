import React from "react";
import data from "./data/data";
import Description from "./utils/Description";
import NavBarHome from "./navbar/NavBarHome";

export default function Projects() {
  const projectsData = data["projects"];

  return (
    <div >
      <NavBarHome />
      <div className="resume-container">
        <h1> Projects </h1>
        </div>
      <div className="projects">
        {projectsData.map((item) => {
          var [startDate, endDate] = item.dates;
          return (
            <div>
            <div key={item.id} className="project-item">
              <img src={item.imgURL} alt="project" />
              <div className="project-item-text">
                <div className="project-heading">
                  <h1>{item.title}</h1>
                  <a href={item.source_code}>source code</a>
                </div>

                <div className="project-heading-description">
                  <h1>{item.title_description}</h1>
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
