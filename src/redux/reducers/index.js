import { combineReducers } from "redux";
import peopleListReducer from "./peoples/peopleListReducer";
import planetListReducer from "./planets/planetListReducer";
import starShipListReducer from "./starships/starShipListReducer";
import selectedPeopleReducer from "./peoples/selectedPeopleReducer";
import selectedPlanetReducer from "./planets/selectedPlanetReducer";
import selectedShipReducer from "./starships/selectedShipReducer";
import filmListReducer from "./films/filmListReducer";

const rootReducer = combineReducers({
  peopleListReducer,
  planetListReducer,
  starShipListReducer,
  selectedPeopleReducer,
  selectedPlanetReducer,
  selectedShipReducer,
  filmListReducer,
});

export default rootReducer;
