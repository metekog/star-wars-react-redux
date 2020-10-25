import * as actionTypes from "../actionTypes";

export function getStarShipSuccess(ships) {
  return {
    type: actionTypes.GET_SHIP_SUCCESS,
    payload: ships,
  };
}

export function getStarShipDetailsSuccess(ship) {
  debugger;
  return {
    type: actionTypes.GET_SHIP_DETAIL_SUCCESS,
    payload: ship,
  };
}

export function getStarShips() {
  return function (dispatch) {
    let url = "https://swapi.dev/api/starships/";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getStarShipSuccess(result)));
  };
}

export function getStarShipDetails(shipId) {
  return function (dispatch) {
    let url = `https://swapi.dev/api/starships/${shipId}/`;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getStarShipDetailsSuccess(result)));
  };
}
