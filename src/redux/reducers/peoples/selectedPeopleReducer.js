import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function selectedPeopleReducer(
  state = initialState.selectedPeople,
  action
) {
  switch (action.type) {
    case actionTypes.GET_PEOPLE_DETAILS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
