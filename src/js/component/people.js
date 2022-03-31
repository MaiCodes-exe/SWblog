import React, { useState, useEffect, useContext } from "react";
import { Home } from "../views/home";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title> {item.name} </Card.Title>
              <Card.Text>
                <p>Height: {item.height} </p>
                <p>Mass: {item.mass} </p>
                <p>Birth Year: {item.birth_year} </p>
                <p>Gender: {item.gender} </p>
              </Card.Text>
              <Button variant="warning">Learn More</Button>
            </Card.Body>
          </Card>
        );
          })}
    </div>
    </>
  );
}

export default People;

