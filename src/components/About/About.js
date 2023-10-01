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
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="about-details">
                            <div className="about-title">
                                <h5>About Me</h5>
                                <span className="line"></span>
                            </div>
                            <p>
                                Mulenga Ngulale is a resilient and driven third-year student majoring in Computer Engineering with a minor in Mathematics. 
                                Combining creativity with flexibility, Mulenga exhibits a powerful blend of strong communication, adept problem-solving, 
                                and proven leadership skills. His current objective is to apply and enhance these skills in roles related to software 
                                development, data analysis, and robotics.
                            </p>
                        </div>

                    </div>
            </div>
        </div>
    )
}
export default About;