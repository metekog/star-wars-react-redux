import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

export default function filmListReducer(state = initialState.films, action) {
  switch (action.type) {
    case actionTypes.GET_FILM_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
