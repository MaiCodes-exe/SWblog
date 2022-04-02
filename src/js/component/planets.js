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
      <div className="d-flex">
        {planets.length > 0 && planets.map((item, index) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
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
                <Button variant="outline-warning">Warning</Button>{" "}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}
export default Planets;
