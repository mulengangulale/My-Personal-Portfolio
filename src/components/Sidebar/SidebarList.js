import React from "react";
import "./SidebarList.css"
import profilepic from "../../image/Headshot.jpeg"
import {AiOutlineHome, AiFillCode, AiFillMail} from "react-icons/ai"
import {IoMdInformationCircleOutline, IoMdSchool} from "react-icons/io"
import {IoBriefcaseSharp} from "react-icons/io5"
import {FaNetworkWired} from "react-icons/fa";
import {PiArticleFill} from "react-icons/pi";

function SidebarList({expandSidebar}) {
    return (
    <React.Fragment>
        {expandSidebar ? (
            <div className="navbar-items">
                <div className="sidebar-profile-pic">
                    <img src={profilepic} alt="My Headshot"/>
                </div>
                <ul>
                    <li className="nav-item"> <AiOutlineHome size={25} color="white"/> Home </li>
                    <li className="nav-item"> <IoMdInformationCircleOutline size={25} color="white"/> About </li>
                    <li className="nav-item"> <IoBriefcaseSharp size={25} color="white"/> Work Experience </li>
                    <li className="nav-item"> <AiFillCode size={25} color="white"/> Tech Stack </li>
                    <li className="nav-item"> <IoMdSchool size={25} color="white"/> Education</li>
                    <li className="nav-item"> <FaNetworkWired size={25} color="white"/> Projects </li>
                    <li className="nav-item"> <PiArticleFill size={25} color="white"/> Blog Posts </li>
                    <li className="nav-item"> <AiFillMail size={25} color="white"/> Contact </li>
                </ul>
            </div>
        ) : (
            <div className="navbar-items-only-icons">
                <ul>
                    <li className="nav-item"> <AiOutlineHome size={25} color="white"/></li>
                    <li className="nav-item"> <IoMdInformationCircleOutline size={25} color="white"/></li>
                    <li className="nav-item"> <IoBriefcaseSharp size={25} color="white"/></li>
                    <li className="nav-item"> <AiFillCode size={25} color="white"/></li>
                    <li className="nav-item"> <IoMdSchool size={25} color="white"/></li>
                    <li className="nav-item"> <FaNetworkWired size={25} color="white"/></li>
                    <li className="nav-item"> <PiArticleFill size={25} color="white"/></li>
                    <li className="nav-item"> <AiFillMail size={25} color="white"/></li>
                </ul>
            </div>
        )}
        
    </React.Fragment>
    )
}

export default SidebarList;