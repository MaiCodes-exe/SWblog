import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div>
				<h1>
					StarWars
				</h1>
			</div>
			<Link to="/people">
			</Link>
			<div className="ml-auto">
				<Link to="/planets">
				</Link>
			</div>
		</nav>
	);
};
