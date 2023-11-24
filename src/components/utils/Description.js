import React from "react";
import { VscChevronRight } from "react-icons/vsc";

export default function Description({ description_items }) {
  return (
    <div className="description">
      {description_items.map((item) => {
        return (
          <div className="description-item">
            {/* <VscChevronRight className="bullet-point" fixedWidth /> */}
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}
