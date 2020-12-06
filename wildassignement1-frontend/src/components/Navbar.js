import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <div className="logo">
          <FontAwesomeIcon icon={faTasks} />
          <span className="title">WildTask</span>
        </div>
      </Link>

      <div className="create-task">
        <Link to="/create" className="nav-link">
          <span>create task</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
