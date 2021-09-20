import React from "react";
import "./Sidebar.css";

import SidebarOptions from "./SidebarOptions";
import VideocamIcon from "@material-ui/icons/Videocam";

function Sidebar() {
  const sidebarChannelImg =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/811dc7d4-1079-4ead-8b48-97f3ff4fa361-profile_image-70x70.png";

  return (
    <div className="sidebar">
      <VideocamIcon />

      <SidebarOptions
        img={sidebarChannelImg}
        title="lifeisbeautiful"
        category="Music"
        viewers="23.4K"
      />

      <SidebarOptions
        img={sidebarChannelImg}
        title="lifeisbeautiful"
        category="Music"
        viewers="23.4K"
      />

      <SidebarOptions
        img={sidebarChannelImg}
        title="lifeisbeautiful"
        category="Music"
        viewers="23.4K"
      />

      <SidebarOptions
        img={sidebarChannelImg}
        title="lifeisbeautiful"
        category="Music"
        viewers="23.4K"
      />

      <SidebarOptions
        img={sidebarChannelImg}
        title="lifeisbeautiful"
        category="Music"
        viewers="23.4K"
      />

      <SidebarOptions
        img={sidebarChannelImg}
        title="lifeisbeautiful"
        category="Music"
        viewers="23.4K"
      />

      <SidebarOptions
        img={sidebarChannelImg}
        title="lifeisbeautiful"
        category="Music"
        viewers="23.4K"
      />
    </div>
  );
}

export default Sidebar;
