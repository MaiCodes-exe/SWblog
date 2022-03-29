import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../styles/home.css";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar";
import People from "../component/people";
import Planets from "../component/planets";
import { Container } from "react-bootstrap";

export const Home = (props) => {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	// const [loading, setLoading] = useState(true);
	async function fetchPeople(props) {
		let res = await fetch("https://www.swapi.tech/api/people");
		let data = await res.json();
		setPeople(data.results)
	}
	async function fetchPlanets() {
		let res = await fetch("https://www.swapi.tech/api/planets");
		let data = await res.json();
		setPlanets(data.results)
	}

	useEffect(() => {
		fetchPeople();
		fetchPlanets();
	}, []);
	people.map
	console.log(people)
	return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://kolmeia.net/wp-content/uploads/2021/01/skywalker-a-family-at-war-tall-36keb.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://selectgame.gamehall.com.br/wp-content/uploads/2022/03/LEGO-Star-Wars-A-Saga-Skywalker-930x620.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
Home.propTypes = {
  iud: PropTypes.number,
  name: PropTypes.string,
  height: PropTypes.string,
  homeworld: PropTypes.string,
  description: PropTypes.string,
};