import * as actionTypes from "../actionTypes";

export function getPeopleSuccess(payload) {
  return {
    type: actionTypes.GET_PEOPLE_SUCCESS,
    payload,
  };
}

export function getPeopleDetailsSuccess(people) {
  return {
    type: actionTypes.GET_PEOPLE_DETAILS_SUCCESS,
    payload:people,
  };
}

export function getPeoples() {
  return function (dispatch) {
    let url = "https://swapi.dev/api/people/";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getPeopleSuccess(result)));
  };
}

export function getPeopleDetails(peopleId) {
  return function (dispatch) {
    let url = `https://swapi.dev/api/people/${peopleId}/`;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getPeopleDetailsSuccess(result)));
  };
}
