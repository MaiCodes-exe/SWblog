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

	useEffect(() => {
		// fetchPeople();
		// fetchPlanets();
	}, []);
	people.map
	console.log(people)
	return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://kolmeia.net/wp-content/uploads/2021/01/skywalker-a-family-at-war-tall-36keb.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://sm.ign.com/ign_pt/news/l/lego-star-/lego-star-wars-the-skywalker-saga-release-date-revealed-alon_sbd8.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
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