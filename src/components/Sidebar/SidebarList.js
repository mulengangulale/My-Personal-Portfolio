import React from "react";
import "./SidebarList.css"
import profilepic from "../../image/Headshot.jpeg"
import {AiOutlineHome, AiFillCode, AiFillMail} from "react-icons/ai"
import {IoMdInformationCircleOutline, IoMdSchool} from "react-icons/io"
import {IoBriefcaseSharp} from "react-icons/io5"
import {FaNetworkWired} from "react-icons/fa";
// import {PiArticleFill} from "react-icons/pi";
import { Link } from "react-scroll";

function SidebarList({expandSidebar}) {
    return (
    <React.Fragment>
        {expandSidebar ? (
            <div className="navbar-items">
                <div className="sidebar-profile-pic">
                    <img src={profilepic} alt="My Headshot"/>
                </div>
                <ul>
                    <li className="nav-item"> 
                        <Link to="home" smooth={true}> 
                            <AiOutlineHome size={25} color="white"/> Home 
                        </Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="about" smooth={true}>
                            <IoMdInformationCircleOutline size={25} color="white"/> About 
                        </Link>
                    </li>

                    <li className="nav-item"> 
                        <Link to="education" smooth={true}>
                            <IoMdSchool size={25} color="white"/> Education
                        </Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="workexperience" smooth={true}>
                            <IoBriefcaseSharp size={25} color="white"/> Work Experience
                        </Link> 
                    </li>
                    <li className="nav-item"> 
                        <Link to="projects" smooth={true}>
                            <FaNetworkWired size={25} color="white"/> Projects 
                        </Link> 
                    </li>
                    <li className="nav-item"> 
                        <Link to="techstack" smooth={true}>
                            <AiFillCode size={25} color="white"/> Tech Stack 
                        </Link> 
                    </li>
                    {/* <li className="nav-item"> <PiArticleFill size={25} color="white"/> Blog Posts </li> */}
                    <li className="nav-item"> 
                        <Link to="contact" smooth={true}>
                            <AiFillMail size={25} color="white"/> Contact
                        </Link> 
                    </li>
                </ul>
            </div>
        ) : (
            <div className="navbar-items-only-icons">
                {/* <ul>
                    <li className="nav-item"> 
                        <Link to="home" smooth={true}> 
                            <AiOutlineHome size={25} color="white"/> 
                        </Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="about" smooth={true}>
                            <IoMdInformationCircleOutline size={25} color="white"/>
                        </Link>
                    </li>

                    <li className="nav-item"> 
                        <Link to="education" smooth={true}>
                            <IoMdSchool size={25} color="white"/> 
                        </Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="workexperience" smooth={true}>
                            <IoBriefcaseSharp size={25} color="white"/> 
                        </Link> 
                    </li>
                    <li className="nav-item"> 
                        <Link to="projects" smooth={true}>
                            <FaNetworkWired size={25} color="white"/> 
                        </Link> 
                    </li>
                    <li className="nav-item"> 
                        <Link to="techstack" smooth={true}>
                            <AiFillCode size={25} color="white"/>  
                        </Link> 
                    </li>
                    <li className="nav-item"> <PiArticleFill size={25} color="white"/> Blog Posts </li>
                    <li className="nav-item"> 
                        <Link to="contact" smooth={true}>
                            <AiFillMail size={25} color="white"/> 
                        </Link> 
                    </li>
                </ul> */}
            </div>
        )}
        
    </React.Fragment>
    )
}

export default SidebarList;