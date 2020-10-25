import * as actionTypes from "../actionTypes";

export function getPlanetSuccess(planets) {
  return {
    type: actionTypes.GET_PLANET_SUCCESS,
    payload: planets,
  };
}

export function getPlanetDetailsSuccess(planet) {
  return {
    type: actionTypes.GET_PLANET_DETAILS_SUCCESS,
    payload: planet,
  };
}

export function getPlanets() {
  return function (dispatch) {
    let url = "https://swapi.dev/api/planets/";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getPlanetSuccess(result)));
  };
}

export function getPlanetDetails(planetId) {
  return function (dispatch) {
    let url = `https://swapi.dev/api/planets/${planetId}/`;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getPlanetDetailsSuccess(result)));
  };
}
