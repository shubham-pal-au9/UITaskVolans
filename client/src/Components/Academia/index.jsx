import React from "react";
import "./acadmedia.scss";

import academia from "../../images/why-volans.png"

const Academia = () => {
    return(
        <div className="mainacadmia">
           <div className="txtacadmia">
                Why Volans Academia
                <ul>
                    <li>Hands-on Data Analysis Training</li>
                    <li> Coaching from Industry Experts</li>
                    <li> Simulation Tests</li>
                    <li> Practice Tests </li>
                    <li> Real Life Projects</li>
                    <li> Access to Online Webinars</li>
                </ul>
           </div>
           <div className="subimg">
                <img className="acadmiaimg" src={academia} alt=""/>
           </div>
        </div>
    )
}

export default Academia;