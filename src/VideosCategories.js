import React from "react";
import "./VideosCategories.css";

function VideosCategories({ img, title, viewers, categories }) {
  return (
    <div className="videosCategories">
      <img src={img} alt="" />
      <h5>{title}</h5>
      <p>{viewers}</p>
      <div>
        <span>{categories}</span>
      </div>
    </div>
  );
}

export default VideosCategories;
