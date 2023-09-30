import React from "react";
import "./About.css";
import DisplayShot from "../../image/Headshot.jpeg"

function About(){
    return(
        <div className="container about-section">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-image">
                        <img src={DisplayShot} alt="Profile Display"/>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                    </div>

                </div>
            </div>
        </div>
    )
}
export default About;