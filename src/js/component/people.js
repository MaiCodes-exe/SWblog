import React, { useState, useEffect, useContext } from "react";
import { Home } from "../views/home";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
      <div className=" container d-flex flex-wrap">
      {people.length > 0 && people.map((item, index) => {
        return (
          <Card style={{ width: "25rem" }} id="card">
            <Card.Img variant="top" src="https://fakeimg.pl/350x200/" />
            <Card.Body>
              <Card.Title> {item.name} </Card.Title>
              <Card.Text>
                <p>Height: {item.height} </p>
                <p>Mass: {item.mass} </p>
                <p>Birth Year: {item.birth_year} </p>
                <p>Gender: {item.gender} </p>
              </Card.Text>
              <Link to={`/views/people/${index}`}>
                <Button variant="warning">Learn More</Button>
              </Link>
              <Button
                variant="outline-warning"
                onClick={() => {
                  actions.addFavourites(item.name);
                }}
              >
                {" "}
                <i className="fas fa-heart"></i>{" "}
              </Button>{" "}
            </Card.Body>
          </Card>
        );
          })}
    </div>
    </>
  );
}

export default People;

