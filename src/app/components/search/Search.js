import React from "react";
import SearchIcon from "../../assets/icons/search";
import './style.sass';

const SearchBar = () => (
  <form action="/" method="get" className="form-container">
    <div className="input-container">
      <input
          type="text"
          id="header-search"
          placeholder="Search"
          name="s"
          className="input-search" 
      />
      <div className="icon-container">
        <SearchIcon />
      </div>
    </div>
  </form>
);

export default SearchBar;