import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ img, title, category, viewers }) {
  return (
    <div className="sidebarOptions">
      <img src={img} alt="" />
      <div className="sidebarOptions__container">
        <div className="sidebarOptions__top">
          <h5>{title}</h5>
          <span>
            <div className="dot"></div> {viewers}
          </span>
        </div>

        <div className="sidebarOptions__bottom">
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarOptions;
