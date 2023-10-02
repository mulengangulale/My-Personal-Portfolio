import React from "react";
import About from "./components/About/About"
import Sidebar from "./components/Sidebar/Sidebar";
import TechStack from "./components/TechStack/TechStack";

function App(){
  return (
    <>
      <Sidebar />
      <About />
      <TechStack />
    </>
  )
}

export default App;