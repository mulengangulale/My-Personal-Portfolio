// Content.js
import React from 'react';
import About from '../About/About';
import Home from '../Home/Home';
import TechStack from '../TechStack/TechStack';
import Project from '../Projects/Project';
import WorkExperience from '../WorkExperience/WorkExperience';

const Content = () => {
  return (
    <>
        <Home />
        <About />
        <WorkExperience />
        <Project />
        <TechStack />
    </>
  );
};

export default Content;
