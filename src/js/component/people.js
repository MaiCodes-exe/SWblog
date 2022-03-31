import React, { useState, useEffect, useContext } from "react";
import { Home } from "../views/home";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function People() {
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState(store.people);
  console.log(people)
  useEffect(() => {
    setPeople(store.people)
  },[store.people])
  return (
    <>
      <h1 id="peep">People</h1>
      <div className="d-flex">
      {people.length > 0 && people.map((item, index) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title> {item.name} </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          )
          })}
    </div>
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
