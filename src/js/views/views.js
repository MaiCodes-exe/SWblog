import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Views = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    const data = store[params.type][params.id]
    console.log(data)
    return (
        <>
        <h1> {data.name} </h1>
        {params.type == "people" ?
            <div>
                <p>Height: {data.height} </p>
                <p>Mass: {data.mass} </p>
                <p>Birth Year: {data.birth_year} </p>
                <p>Gender: {data.gender} </p>
            </div> :
            params.type == "planets" ?
                <div>
                    <p>Climate: {data.climate} </p>
                    <p>Orbit: {data.orbital_period} </p>
                    <p>Population: {data.population} </p>
                    <p>Terrain: {data.terrain} </p>
                </div> :
                <div> 
                    <p> No info found </p>
                </div> 
    }
        </>
    )
};
