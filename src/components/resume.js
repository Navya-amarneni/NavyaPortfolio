import React from "react";
import PdfViewer from "./utils/PdfViewer";
import "../components/css/resume.css";
import NavBarHome from "./navbar/NavBarHome";
import "../components/css/Home.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1> Resume </h1>
      <NavBarHome />
      <PdfViewer />;
    </div>
  );
};
export default Resume;
