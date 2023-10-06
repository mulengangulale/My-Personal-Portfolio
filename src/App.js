import React from "react";
// import About from "./components/About/About"
import Sidebar from "./components/Sidebar/Sidebar";
// import TechStack from "./components/TechStack/TechStack";
// import Project from "./components/Projects/Project";
import Layout from "./components/Layout/Layout";
import Content from "./components/Contents/Contents";
// import Home from "./components/Home/Home";

function App(){
  return (
    <>
       {/* <Home /> */}
      <Layout sidebar={<Sidebar />} content={<Content />} />
      {/* <Sidebar />
      <About />
      <TechStack />
      <Project /> */}
    </>
  )
}

export default App;