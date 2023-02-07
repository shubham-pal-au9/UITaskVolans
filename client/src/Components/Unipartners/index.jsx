import React from "react";
import "./unipartners.scss";

import impCollege from "../../images/university-icon/imp-university.png";
import londonCollege from "../../images/university-icon/london-school.png";
import kingCollege from "../../images/university-icon/kings-collage.png";
import aauburnUniversity from "../../images/university-icon/Aauburn-university.png";
import acuUniversity from "../../images/university-icon/acu.png";

const Unipartners = () => {
    return(
        <div className="mainunipartners">
            <div className="subpartners">  
                <div className="topsubpartners">
                    <hr className="hrtag"/> 
                    <div className="uniparttext"> UNIVERSITY PARTENERS</div>
                    <hr className="hrtag"/>
                </div>
                <div className="logoImg">
                    <img className="uniImg" src={impCollege} alt=""/>
                    <img className="uniImg" src={londonCollege} alt=""/>
                    <img className="uniImg" src={kingCollege} alt=""/>
                    <img className="uniImg" src={aauburnUniversity} alt=""/>
                    <img className="uniImg" src={acuUniversity} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Unipartners;