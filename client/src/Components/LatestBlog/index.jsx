import React from "react";
import "./latestblog.scss";

import latestblog from "../../images/latestblog.png"

const LatestBlog = () => {
    return(
        <div className="mainlaatestblog">
            <img className="imgstyle" src={latestblog} alt=""/>
        </div>
    )
}

export default LatestBlog;