// Content.js
import React from 'react';
import About from '../About/About';
import Home from '../Home/Home';
import TechStack from '../TechStack/TechStack';
import Project from '../Projects/Project';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';

const Content = () => {
  return (
    <>
        <Home />
        <About />
        <Education />
        <WorkExperience />
        <Project />
        <TechStack />
    </>
  );
};

export default Content;
