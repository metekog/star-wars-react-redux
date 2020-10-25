import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function starShipListReducer(
  state = initialState.starShips,
  action
) {
  switch (action.type) {
    case actionTypes.GET_SHIP_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
