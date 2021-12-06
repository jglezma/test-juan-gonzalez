import React from "react";
import './style.sass';

const Navbar = ({left, right}) => ( 
    <div className="navbar-layout">
      <div className="content-navbar">
        {left}
      </div>
      <div className="content-navbar">
        {right}
      </div>
    </div>
);

export default Navbar;
