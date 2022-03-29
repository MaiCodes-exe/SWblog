import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar mb-3" id="nav">
      <div>
			<Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
          id="logo"
        ></img>
		</Link>
      </div>
      <div>
        <button type="button" className="btn" id="button1">
          <Link to="/people">People</Link>
        </button>
        <button type="button" className="btn" id="button2">
          <Link to="/planets">Planets</Link>
        </button>
      </div>
    </nav>
  );
};
