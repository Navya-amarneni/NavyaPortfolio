import React from "react";
import data from "./data/data";
import SkillItem from "./utils/SkillItem";
import NavBarHome from "./navbar/NavBarHome";

export default function Skills() {
  const skillData = data["skills"];
  const toolsData = data["tools"];
  const courseData = data["coursework"];

  return (
    <div>
      <NavBarHome />
      <div className="resume-container">
        <h1> Skills and Courses </h1>
      </div>
      <div className="skills">
        <SkillItem skillTitle="Programming Languages" skillData={skillData} />
        <SkillItem skillTitle="Tools and Frameworks" skillData={toolsData} />
        <SkillItem skillTitle="CourseWork" skillData={courseData} />
      </div>
    </div>
  );
}
