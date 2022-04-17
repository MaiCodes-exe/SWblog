import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import People from "./people";

export const Navbar = () => {
      const { store, actions } = useContext(Context);
      
      function deletePeople(item) {
      var delarray = [...favourites];
      delarray.splice(item);
      favourites(delarray);
      }
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
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            <i className="fas fa-heart"></i>{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {store.favourites.map((item, index) => {
              return (
                <>
                  <Dropdown.Item>{item}</Dropdown.Item>
                  <button
                    onClick={() => {
                      deletePeople(item, index);
                    }}
                  >
                    <i class="fas fa-trash"></i>{" "}
                  </button>
                </>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};
