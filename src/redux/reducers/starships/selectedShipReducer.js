import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function selectedShipReducer(
  state = initialState.selectedShip,
  action
) {
  switch (action.type) {
    case actionTypes.GET_SHIP_DETAIL_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
