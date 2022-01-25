import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import allCountryScores from "../scores";
import { sortBy } from "lodash";
import CountryScore from "./CountryScore";

function App() {
  const [scores, setScores] = useState(allCountryScores);
  console.log(scores);
  // Sort by country name
  const sortedCountry = sortBy(scores, "name");

  // Sort by indiviual personal scores
  // const sortedScores = sortedCountry.map((el) => {
  //   el.scores.sort((a, b) => b.s - a.s);
  //   return el;
  // });

  return (
    <div>
      <div className="container">
        <h1 className="container__header">High Scores per Country</h1>
        <button>Sort by Scores</button>

        {sortedCountry.map((countryScore, index) => {
          <div className="country">
            <CountryScore
              key={index}
              id={index}
              country={countryScore.name}
              name={countryScore.scores.map((el) => el.n)}
              score={countryScore.scores.map((el) => el.s)}
            />
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;
