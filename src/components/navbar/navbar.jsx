import React from "react";
import "./navbar.css";
function Navbar({ setSearch }) {
  return (
    <div className="Navbar">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <i class="fas fa-thin fa-magnifying-glass"></i>
      </div>
      <p>
        Relevance <i class="fas fa-light fa-chevron-down"></i>
      </p>
      <p>
        All Brands <i class="fas fa-light fa-chevron-down"></i>
      </p>
    </div>
  );
}

export default Navbar;
