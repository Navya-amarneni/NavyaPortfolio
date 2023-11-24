import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = () => {
  return (
    <div className="resume">
      <Document file="https://raw.githubusercontent.com/Navya-amarneni/MyPortfolio/main/Resume_Navyasree.pdf">
        <Page pageNumber={1} renderTextLayer={false} />
      </Document>
    </div>
  );
};

export default PdfViewer;
