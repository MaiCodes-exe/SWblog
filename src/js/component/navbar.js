import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Navbar = () => {
      const { store, actions } = useContext(Context);

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
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {store.favourites.map((item, index) => {
              return (
                <>
                  <Dropdown.Item>{item}</Dropdown.Item>
                </>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};
