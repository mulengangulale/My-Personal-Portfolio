import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";

function Project(){
    const data = [
        {
            name: "Simone Game",
            des: "The Simon game is an exhilarating electronic experience filled with captivating lights and sounds. Players are challenged to replicate random sequences of lights by tapping the colored pads in the correct order. For this project, I've reimagined the Simon Game for a virtual play, preserving the same instructions and excitement.",
            projectlink: "https://github.com/mulengangulale/My-Simon-Game",
            techused: [
                {techname: "Node Js"},
                {techname: "HTML"},
                {techname: "CSS"}
            ]
        },
        {
            name: "Python Quiz Game",
            des: "Allow me to introduce a captivating Python Quiz Game that skillfully utilizes the magic of Graphical User Interface (GUI) and the robust foundation of Object-Oriented Programming (OOP). This unique game seamlessly integrates these elements to create an interactive and engaging experience where users are presented with a set of thought-provoking questions to answer.",
            projectlink: "https://github.com/mulengangulale/GUI-Quiz-Game",
            techused: [
                {techname: "Python"},
                {techname: "OOP"},
                {techname: "TKinter"}
            ]
        },
        {
            name: "Tin Dog",
            des: "Presenting an innovative web replica that takes the concept of Tinder and tailors it for dogs. This delightful platform offers our four-legged friends the opportunity to connect with potential canine companions, providing a space for them to socialize, make friends, and perhaps even discover their soulmates among their fellow furry companions.",
            projectlink: "https://github.com/mulengangulale/My-TinDog-Project",
            techused: [
                {techname: "Bootstrap"},
                {techname: "HTML"},
                {techname: "CSS"}
            ]
        },
        {
            name: "Web Keeper App",
            des: "Introducing an online web keeper app designed for individuals to freely express their thoughts and securely store them in a personalized digital vault. This platform empowers users to document their thoughts, dreams, and memories in a private and convenient online repository.",
            projectlink: "https://github.com/mulengangulale/Web-Based-Keeper-App",
            techused: [
                {techname: "Node Js"},
                {techname: "HTML"},
                {techname: "CSS"}
            ]
        },
        {
            name: "Hangman",
            des: "This game is a wordplaying and brain-teasing fun web-based Hangman game. Test your linguistic skills, broaden your vocabulary, and enjoy the classic challenge of guessing the hidden word one letter at a time. Get ready to embark on an exciting journey of word puzzles right here on our website!",
            projectlink: "https://github.com/mulengangulale/Web-Based-Hangman-Game",
            techused: [
                {techname: "Python"},
                {techname: "Java Script"},
                {techname: "HTML & CSS"}
            ]
        },
        {
            name: "E-Commerce Site",
            des: "Introducing Pro-Shop, your go-to online E-commerce destination. Just like Amazon, users can browse and shop for a wide range of items. With the ability to easily add or remove items from their cart, they have the freedom to curate their shopping experience as they please.",
            projectlink: "#None",
            techused: [
                {techname: "MongoDB"},
                {techname: "Express JS"},
                {techname: "React Js"},
                {techname: "Node Js"}
            ]
        }
    ]
    return (
        <div className="container project-section" id="projects">
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