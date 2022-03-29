import React, { useState, useEffect } from "react";
import { Home } from "../views/home";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function People(props) {
  return (
    <>
      <h1>People</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title> {props.name} </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            {props.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default People;

People.propTypes = {
  iud: PropTypes.number,
  name: PropTypes.string,
  height: PropTypes.string,
  homeworld: PropTypes.string,
  description: PropTypes.string,
};
