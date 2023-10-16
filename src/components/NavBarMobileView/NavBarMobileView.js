import React, {useState} from 'react';
import "./NavBarMobileView.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineHome, AiFillCode, AiFillMail} from "react-icons/ai"
import {IoMdInformationCircleOutline, IoMdSchool} from "react-icons/io"
import {IoBriefcaseSharp} from "react-icons/io5"
import {FaNetworkWired} from "react-icons/fa";
import { Link } from "react-scroll";

const NavBarMobileView = () => {
    const [open, setOpen] = useState(false)

    function handleClick(){
        setOpen(!open)
    }
  return (
    <div className='mobile-view-navbar'>
        <div className='navbar-header'>
            <p><GiHamburgerMenu size={25} onClick={handleClick}/></p>
        </div>
        { open ? (<div className='mobile-nav'>
            <ul>
                <li className="nav-item-mobileview"> 
                    <Link to="home" smooth={true}> 
                        <AiOutlineHome size={25} color="white"/> Home 
                    </Link>
                </li>
                <li className="nav-item-mobileview"> 
                    <Link to="about" smooth={true}>
                        <IoMdInformationCircleOutline size={25} color="white"/> About 
                    </Link>
                </li>

                <li className="nav-item-mobileview"> 
                    <Link to="education" smooth={true}>
                        <IoMdSchool size={25} color="white"/> Education
                    </Link>
                </li>
                <li className="nav-item-mobileview"> 
                    <Link to="workexperience" smooth={true}>
                        <IoBriefcaseSharp size={25} color="white"/> Work Experience
                    </Link> 
                </li>
                <li className="nav-item-mobileview"> 
                    <Link to="projects" smooth={true}>
                        <FaNetworkWired size={25} color="white"/> Projects 
                    </Link> 
                </li>
                <li className="nav-item-mobileview"> 
                    <Link to="techstack" smooth={true}>
                        <AiFillCode size={25} color="white"/> Tech Stack 
                    </Link> 
                </li>
                {/* <li className="nav-item"> <PiArticleFill size={25} color="white"/> Blog Posts </li> */}
                <li className="nav-item-mobileview"> 
                    <Link to="contact" smooth={true}>
                        <AiFillMail size={25} color="white"/> Contact
                    </Link> 
                </li>
            </ul>
        </div>): null }
        
    </div>
  )
}

export default NavBarMobileView