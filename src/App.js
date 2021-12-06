import React from "react";
import Sidebar from "./app/layout/sidebar";
import './style.sass';

const App = () => ( 
    <div className="main-layout">
      <div id="layout-container">
        <Sidebar />
      </div>
    </div>
);

export default App;
