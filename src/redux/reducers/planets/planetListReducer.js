import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function planetListReducer(
  state = initialState.planets,
  action
) {
  switch (action.type) {
    case actionTypes.GET_PLANET_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
