import React from "react";
import {FcExpand, FcCollapse} from "react-icons/fc";
import "./ProjectList.css";

function ProjectList({name, des, projectlink, techused}){
    return (
        <div className="project-list">
            <div className="title-and-collapse-option">
                <h5>{name}</h5>
                <p><FcExpand size = {20}/></p>
            </div>
            <p>{des.substring(0, 100)}</p>
            <div className="row">
                {techused && techused.map((tech, index) => (
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}> 
                        <div className="tech-used-in-project">
                            <p>{tech.techname}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="live-demo-button">
                    <a href={projectlink} target="_">Live Demo</a>
            </div>
        </div>
    )
}
export default ProjectList;