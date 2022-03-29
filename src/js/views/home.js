import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../styles/home.css";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar";
import People from "../component/people";
import Planets from "../component/planets";

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