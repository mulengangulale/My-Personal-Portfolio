import React from "react";
import About from "./components/About/About"
import Sidebar from "./components/Sidebar/Sidebar";
import TechStack from "./components/TechStack/TechStack";
import Project from "./components/Projects/Project";

function App(){
  return (
    <>
      <Sidebar />
      <About />
      <TechStack />
      <Project />
    </>
  )
}

export default App;