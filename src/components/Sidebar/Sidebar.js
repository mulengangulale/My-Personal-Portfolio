import React, {useState} from "react";
import "./Sidebar.css"
// import Home from "../Home/Home";
import SidebarList from "./SidebarList";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Sidebar(){

    const [expandSidebar, setExpandSidebar] = useState(true)
    function handleExpandClick (){
        setExpandSidebar(!expandSidebar)
    }
    return(
        <div className="container-fluid sidebar-section">
            <div className={expandSidebar ? "sidebar-expand sidebar": "sidebar"}> 
                <div className="icon-for-sidebar-expand-and-collapse">
                    <p onClick={handleExpandClick}>
                        {/* {expandSidebar ? <BsChevronLeft size={30}/> : <BsChevronRight size={30}/>} */} {/* Commented out the expand button 
                        space and navigation bar behavior*/} 
                    </p>

                </div>
                <SidebarList expandSidebar={expandSidebar} />
            </div>
            

            {/* <div className="container-fluid">
                <Home />
            </div> */}

        </div>
    )
}

export default Sidebar;