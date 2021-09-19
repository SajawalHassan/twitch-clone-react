import React from "react";
import "./Header.css";

import Crop32Icon from "@material-ui/icons/Crop32";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qLP-71ZHBQh6oj5QBrZz4sYNUMlDVgdK1Q&usqp=CAU"
          alt=""
        />
        <p>Browse</p>
        <Crop32Icon title="Browse" className="header__leftBrowseIcon" />
        <MoreVertIcon title="More" className="header__leftMoreIcon" />
      </div>

      <div className="header__middle">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <h4 className="header__rightLoginBtn">Login</h4>
        <h4>Sign Up</h4>
        <PersonIcon />
      </div>
    </div>
  );
}

export default Header;
