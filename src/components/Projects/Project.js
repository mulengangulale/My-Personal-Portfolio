import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";

function Project(){
    const data = [
        {
            name: "E-Commerce Site",
            des: "This is an one line E-commerce site. It is a replica of Airbnb. Lorem ipsum banbo confus consus ipsum lorem decapo sisha en lancada delapops. Lorem ipsum banbo confus consus ipsum lorem decapo sisha en lancada delapops",
            projectlink: "#None",
            techused: [
                {techname: "MongoDB"},
                {techname: "Express JS"},
                {techname: "React Js"},
                {techname: "Node Js"}
            ]
        },
        {
            name: "Simone Game",
            des: "The Simon game is the exciting electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order. In this project, I created the Simon Game to to be played with the same instructions but virtually.",
            projectlink: "#None",
            techused: [
                {techname: "Node Js"},
                {techname: "HTML"},
                {techname: "CSS"}
            ]
        },
        {
            name: "Python Quiz Game",
            des: "This is a Python Quiz Game that laverages Graphical User interface and Object Oriented Programming to create a game where user is asked to answer some questions. Lorem ipsum banbo confus consus ipsum lorem decapo sisha en lancada delapops",
            projectlink: "#None",
            techused: [
                {techname: "Python"},
                {techname: "OOP"},
                {techname: "TKinter"}
            ]
        },
        {
            name: "Tin Dog",
            des: "This is a web replica for tinder but for dogs. It is bacially a site where dogs can go maybe find their soulmates. Lorem ipsum banbo confus consus ipsum lorem decapo sisha en lancada delapops",
            projectlink: "#None",
            techused: [
                {techname: "Bootstrap"},
                {techname: "HTML"},
                {techname: "CSS"}
            ]
        },
        {
            name: "Web Keeper App",
            des: "This is an online web keeper app for people to write what they want and for them to keep it to a personalized online keeper. Lorem ipsum banbo confus consus ipsum lorem decapo sisha en lancada delapops",
            projectlink: "#None",
            techused: [
                {techname: "Node Js"},
                {techname: "HTML"},
                {techname: "CSS"}
            ]
        },
        {
            name: "Lorem Ipsum",
            des: "Lorem ipsum banbo confus consus ipsum lorem decapo sisha en lancada delapops. Lorem ipsum banbo confus consus ipsum lorem decapo sisha en lancada delapops",
            projectlink: "#None",
            techused: [
                {techname: "Lorem"},
                {techname: "Lorem"},
                {techname: "Lorem"}
            ]
        }
    ]
    return (
        <div className="container" id="projects">
            <div className="section-title">
                <h5>Projects</h5>
                <span className="line"></span>
            </div>
            <div className="row">
            {data.map((item, index) => (
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
                    <ProjectList {...item}/>
                </div>
            ))}

            </div>
        </div>
    )
}
export default Project;