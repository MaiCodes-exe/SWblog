import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function Planets() {
  const { store, actions } = useContext(Context);
  const [planets, setPlanets] = useState(store.planets);
  console.log(planets);
  useEffect(() => {
    setPlanets(store.planets);
  }, [store.planets]);
  return (
    <>
      <h1 id="plan">Planets</h1>
      <div className="container d-flex flex-wrap" id="display">
        {planets.length > 0 &&
          planets.map((item, index) => {
            return (
              <Card style={{ width: "25rem" }} id="card">
                <Card.Img variant="top" src="https://fakeimg.pl/350x200/" />

                <Card.Body>
                  <Card.Title> {item.name} </Card.Title>
                  <Card.Text>
                    <p>Climate: {item.climate} </p>
                    <p>Orbit: {item.orbital_period} </p>
                    <p>Population: {item.population} </p>
                    <p>Terrain: {item.terrain} </p>
                  </Card.Text>
                  <Link to={`/views/planets/${index}`}>
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
export default Planets;
