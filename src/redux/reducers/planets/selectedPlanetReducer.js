import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function selectedPlanetReducer(
  state = initialState.selectedPlanet,
  action
) {
  switch (action.type) {
    case actionTypes.GET_PLANET_DETAILS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
