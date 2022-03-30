import React, { useState, useEffect, useContext } from "react";
import { Home } from "../views/home";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function People() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <h1 id="peep">People</h1>
      {store.people.map((item, index) => {
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title> {item.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>;
      })}
    </>
  );
}

export default People;

// People.propTypes = {
//   iud: PropTypes.number,
//   name: PropTypes.string,
//   height: PropTypes.string,
//   homeworld: PropTypes.string,
//   description: PropTypes.string,
// };
