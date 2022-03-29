import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import People from "../component/people";
import Planets from "../component/planets";

export const Home = () => {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	// const [loading, setLoading] = useState(true);
	async function fetchPeople() {
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
	return (
    <>
      {/* <Router>
        <div>
          <Switch>
            <Route exact path="/people">
              <People />
            </Route>
            <Route exact path="/planets">
              <Planets />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </>
  );
};
