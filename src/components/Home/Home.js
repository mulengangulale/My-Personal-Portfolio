import React from "react";
<<<<<<< HEAD
import "./Home.css"

function Home(){
    return (
        <div>Home Section Here</div>
=======
import "./Home.css";
import Typewriter from "typewriter-effect";
import myResume from "./Resume.pdf"

function Home(){
    return (
        <div className="container-fluid home">
            <div className="container home-content">
                <h1>I am Mulenga Ngulale and I am a</h1>
                <h3>
                    <Typewriter
                        options={{
                            strings: ["Machine Learning Enthusiat", "Robotics Enthusiat", "Data Science Enthusiat"],
                            autoStart: true,
                            loop: true,
                            delay: 5
                        }}
                    />
                </h3>
                <div className="button-for-action">
                    <div className="hire-me-button">
                        Hire Me
                    </div>
                    <div className="get-resume-button">
                        <a href={myResume} rel="noopener noreferrer" target="_blank">
                            Get Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
>>>>>>> 93d5ecd7 (Initial commit)
    )
}

export default Home;