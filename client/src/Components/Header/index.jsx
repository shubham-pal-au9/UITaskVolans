import React from "react";
import headerImg from "../../images/header-1.png";

import "./header.scss";

const Header = () => {
  return (
    <div className="mainheader">
      <img className="imgHeader" src={headerImg} alt="" />
    </div>
  );
};

export default Header;
