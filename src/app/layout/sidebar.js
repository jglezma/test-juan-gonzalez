import React from "react";
import Navbar from "../components/navbar/Navbar";
import SearchBar from "../components/search/Search";
import Preview from "../components/preview/Preview";
import './style.sass';

const Sidebar = () => ( 
    <div className="side-layout">
      <Navbar 
        left={
          <b>Inbox</b>
        }
        right={
          <p>Filter</p>
        }
      />
      <SearchBar />
      <Preview />
    </div>
);

export default Sidebar;
