import React from "react";
import "./VideosCard.css";

function VideosCard({
  heading,
  thumbnail,
  ifLive,
  viewers,
  channelImg,
  channel,
  title,
  game,
  categories,
}) {
  return (
    <div className="videosCard">
      <div className="videosCard__top">
        <h3>{heading}</h3>
        {/* (PROP) img */}
        <img src={thumbnail} alt="" />

        {/* (PROP) ifLive */}
        <p>{ifLive}</p>

        {/* (PROP) viewers */}
        <span>{viewers}</span>
      </div>

      <div className="videosCard__middle">
        {/* (PROP) channelImg */}
        <img src={channelImg} alt="" />

        {/* (PROP) title */}
        <h5>{title}</h5>
      </div>

      <div className="videosCard__bottom">
        {/* (PROP) channel */}
        <p>{channel}</p>

        {/* (PROP) game */}
        <p>{game}</p>

        {/* (PROP) categories */}
        <h5>{categories}</h5>
      </div>
    </div>
  );
}

export default VideosCard;
