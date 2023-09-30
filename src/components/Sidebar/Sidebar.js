import React, {useState} from "react";
import "./Sidebar.css"
import Home from "../Home/Home";
<<<<<<< HEAD
=======
import SidebarList from "./SidebarList";
>>>>>>> 93d5ecd7 (Initial commit)
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
                        {expandSidebar ? <BsChevronLeft size={30}/> : <BsChevronRight size={30}/>}
                    </p>
<<<<<<< HEAD
                </div>
            </div>

            <div className="container">
=======
                    
                </div>
                <SidebarList expandSidebar={expandSidebar} />
            </div>
            

            <div className="container-fluid">
>>>>>>> 93d5ecd7 (Initial commit)
                <Home />
            </div>

        </div>
    )
}

export default Sidebar;