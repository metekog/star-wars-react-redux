import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function peopleListReducer(
  state = initialState.peoples,
  action
) {
  switch (action.type) {
    case actionTypes.GET_PEOPLE_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
