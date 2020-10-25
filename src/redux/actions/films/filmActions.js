import * as actionTypes from "../actionTypes";

export function getFilmsSuccess(films) {
  return {
    type: actionTypes.GET_FILM_SUCCESS,
    payload:films,
  };
}

export function getFilms() {
  debugger;
  return function (dispatch) {
    let url = "https://swapi.dev/api/films/";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getFilmsSuccess(result)));
  };
}
