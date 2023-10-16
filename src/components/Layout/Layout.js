// Layout.js
import React from 'react';
import "./Layout.css"

const Layout = ({ sidebar, content }) => {
  return (
    
    <div className="container-fluid">
      <div className="row main-view">
        {/* Sidebar */}
        <div className="col-lg-2">
          {sidebar}
        </div>
        {/* Content Area */}
        <div className="col-lg-10">
          <div>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
