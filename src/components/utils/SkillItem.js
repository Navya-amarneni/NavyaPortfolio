import React from "react";
import "../css/skills.css";

export default function SkillItem({ skillTitle, skillData }) {
  const showCourse = skillTitle === "CourseWork";

  return (
    <div className="skill-item">
      <h1>{skillTitle}</h1>
      <div className={`skill-data ${showCourse ? "course-text" : ""} `}>
        {skillData.map((item) => {
          const progressBar = (item) => {
            const inlineStyle = {
              width: item.percentage+'%',
            };
            console.log(inlineStyle);
            return (
              <div className="skill-chart">
                <h6 className="heading heading-h6">{item.title}</h6>
                <div className="progress-charts snipcss-2QiU5">
                  <div className="progress">
                    <div
                      className="progress-bar wow fadeInLeft style-hROlJ"
                      style={inlineStyle}
                      data-wow-duration="0.5s"
                      data-wow-delay=".3s"
                      role="progressbar"
                      aria-valuenow={item.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      id="style-hROlJ"
                    >
                      <span>{item.percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          const courseBar = (item) => {
            return (
              <div>
                <p>{item}</p>
              </div>
            );
          };
          return <div>{!showCourse ? progressBar(item) : courseBar(item)}</div>;
        })}
      </div>
    </div>
  );
}
