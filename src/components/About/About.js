import React from "react";
import "./About.css";
import DisplayShot from "../../image/Headshot.jpeg"

function About(){
    return(
        <div>
            <div className="container ml-auto about-section" id="about">
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
                                    Mulenga Ngulale is a determined third-year student majoring in Computer Engineering with a 
                                    minor in Mathematics and Physics. Mulenga is all about combining creativity, flexibility, excellent 
                                    communication, smart problem-solving, and strong leadership skills. Right now, he's eager to 
                                    use these skills in jobs related to software development, data analysis, and robotics.
                                </p>
                            </div>

                        </div>
                </div>
            </div>
        </div>
    )
}
export default About;