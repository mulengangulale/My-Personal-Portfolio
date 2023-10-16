// Content.js
import React from 'react';
import About from '../About/About';
import Home from '../Home/Home';
import TechStack from '../TechStack/TechStack';
import Project from '../Projects/Project';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import NavBarMobileView from '../NavBarMobileView/NavBarMobileView';
import MobileLayout from '../MobileLayout/MobileLayout';


const Content = () => {
  return (
    <>
        <MobileLayout />
        <NavBarMobileView />
        <Home />
        <About />
        <Education />
        <WorkExperience />
        <Project />
        <TechStack />
        <Contact />
        <ScrollToTop smooth height='20' width='20' style={{borderRadius: "90px"}} />
    </>
  );
};

export default Content;
