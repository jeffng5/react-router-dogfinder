import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/dogs">
        Home
      </Link>
      <Link to="/dogs/0">
        Whiskey
      </Link>
      <Link to="/dogs/1">
        Duke
      </Link>
      <Link to="/dogs/2">
        Perry
      </Link>
    </nav>
  );
}

export default NavBar;