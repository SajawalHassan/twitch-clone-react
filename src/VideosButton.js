import React from "react";
import "./VideosButton.css";

function VideosButton({ name, img }) {
  return (
    <div className="videosButton">
      <h1>{name}</h1>
      <img src={img} alt="" />
    </div>
  );
}

export default VideosButton;
