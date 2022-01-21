import React from "react";
import allCountryScores from "../scores";
import sortBy from "lodash/sortBy";

function CountryScore() {
  // Sort by country name
  const sortedCountry = sortBy(allCountryScores, "name");

  // Sort by indiviual personal scores
  const sortedScores = sortedCountry.map((el) => {
    el.scores.sort((a, b) => b.s - a.s);
    return el;
  });

  return (
    <div className="container">
      <h1 className="container__header">High Scores per Country</h1>
      {sortedScores.map((countryScore) => (
        <div className="country">
          <h2 className="country__header">High Scores : {countryScore.name}</h2>
          <ul className="list">
            {countryScore.scores.map((score) => (
              <li className="listItems">
                <span className="listItems__names">{score.n}</span>
                <span className="listItems__scores">{score.s}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CountryScore;
