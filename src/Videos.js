import React from "react";
import "./Videos.css";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import SettingsIcon from "@material-ui/icons/Settings";
import MovieIcon from "@material-ui/icons/Movie";
import FullscreenIcon from "@material-ui/icons/Fullscreen";

function Videos() {
  return (
    <div className="videos">
      <div className="videos__mainVideo">
        <div className="videos__mainVideoTop">
          <PlayArrowIcon />
        </div>

        <div className="videos__mainVideoBottom">
          <div>
            <PlayArrowIcon />
            <VolumeMuteIcon />
          </div>

          <div>
            <SettingsIcon />
            <MovieIcon />
            <FullscreenIcon />
          </div>
        </div>
      </div>

      <div className="videos__card">
        {/* Live channels we think you'll like (H3) */}
        {/* VideosCard (PROP) (COMPONENT) */}
        {/* VideosCard (PROP) (COMPONENT) */}
      </div>

      {/* Show more */}

      <div className="video__button">
        {/* VideoButton (PROP) (COMPONENT) */}
        {/* VideoButton (PROP) (COMPONENT) */}
        {/* VideoButton (PROP) (COMPONENT) */}
        {/* VideoButton (PROP) (COMPONENT) */}
      </div>

      <div className="video__categories">
        {/* Categories we think you'll like (H3) */}
        {/* *X SCROLLABLE* */}
        {/* VideosCategories (PROP) (COMPONENT) */}
        {/* VideosCategories (PROP) (COMPONENT) */}
        {/* VideosCategories (PROP) (COMPONENT) */}
        {/* VideosCategories (PROP) (COMPONENT) */}
      </div>

      <div className="video__recomended">
        {/* Recommended Just Chatting channels (H3) */}
        {/* *X SCROLLABLE* */}
        {/* VideosRecommended */}
      </div>
    </div>
  );
}

export default Videos;
