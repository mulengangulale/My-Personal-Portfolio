import React from "react";
import {FcExpand, FcCollapse} from "react-icons/fc";
import "./ProjectList.css";
import { useState } from "react";

function ProjectList({name, des, projectlink, techused}){

    const [show, setShow] = useState(false);
    function handleShowAndCollapse (){
        setShow(!show);
    }
    return (
        <div 
            className="project-list" 
            onClick={handleShowAndCollapse}
            onMouseEnter={()=>setShow(true)}
            onMouseLeave={()=>setShow(false)}
        >
            
            <div className="title-and-collapse-option">
                <h5>{name}</h5>
                <p>{show ? <FcCollapse size = {20}/> : <FcExpand size={20}/>}</p>
            </div>
            <div className="description">
                {show? <p>{des}</p> : <p>{des.substring(0, 100)}... Read More </p>}
            </div>
            <div className="row">
                {techused && techused.map((tech, index) => (
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}> 
                        <div className="tech-used-in-project tech-button">
                            <div>{tech.techname}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="live-demo-button row">
                    <a href={projectlink} target="_">Live Demo</a>
            </div>
        </div>
    )
}
export default ProjectList;