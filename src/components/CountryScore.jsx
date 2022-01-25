import React from "react";
import allCountryScores from "../scores";
import sortBy from "lodash/sortBy";

function CountryScore(props) {
  // Sort by country name
  //   const sortedCountry = sortBy(allCountryScores, "name");

  // Sort by indiviual personal scores
  //   const sortedScores = sortedCountry.map((el) => {
  //     el.scores.sort((a, b) => b.s - a.s);
  //     return el;
  //   });

  return (
    <div>
      <h2 className="country__header">High Scores : {props.country}</h2>
      <ul className="list">
        <li className="list__item">
          <span className="list__item__name">{console.log(props.name)}</span>
          <span className="list__item__score">{props.score}</span>
        </li>
      </ul>
      {/* {sortedScores.map((countryScore) => (
          <ul className="list">
            {countryScore.scores.map((score) => (
              <li className="listItems">
                <span className="listItems__names">{score.n}</span>
                <span className="listItems__scores">{score.s}</span>
              </li>
            ))}
          </ul>
      ))} */}
    </div>
  );
}

export default CountryScore;
