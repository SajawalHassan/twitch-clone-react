import React from "react";
import "./Videos.css";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import SettingsIcon from "@material-ui/icons/Settings";
import MovieIcon from "@material-ui/icons/Movie";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import VideosCard from "./VideosCard";
import VideosButton from "./VideosButton";

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
        <h3>Live channels we think you'll like</h3>

        <div className="videos__cardVideo">
          <VideosCard
            thumbnail="https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_csgo-440x248.jpg"
            ifLive="LIVE"
            viewers="2.6K viewers"
            channelImg="https://static-cdn.jtvnw.net/jtv_user_pictures/1975b18f-fa7d-443f-b191-fba08f92f3a2-profile_image-50x50.jpeg"
            title="Not sweaty at all!"
            channel="ESL_CSGO"
            game="Csgo"
            categories="Esports"
          />
          <VideosCard
            thumbnail="https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_csgo-440x248.jpg"
            ifLive="LIVE"
            viewers="2.6K viewers"
            channelImg="https://static-cdn.jtvnw.net/jtv_user_pictures/1975b18f-fa7d-443f-b191-fba08f92f3a2-profile_image-50x50.jpeg"
            title="Not sweaty at all!"
            channel="ESL_CSGO"
            game="Csgo"
            categories="Esports"
          />
        </div>
      </div>

      <div className="border"></div>

      <div className="videos__button">
        <VideosButton
          name="Games"
          img="https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg"
        />

        <VideosButton
          name="IRL"
          img="https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg"
        />

        <VideosButton
          name="Music"
          img="https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg"
        />

        <VideosButton
          name="Esports"
          img="https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg"
        />
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
