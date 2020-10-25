import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import PeopleList from "../peoples/peopleList";
import PlanetList from "../planets/planetList";
import StarShipsList from "../starships/starShipList";
import NotFound from "../common/NotFound";
import { Switch, Route } from "react-router-dom";
import Homepage from "../homepage/homePage";
import PeopleDetails from "../peoples/peopleDetail";
import PlanetDetails from "../planets/planetDetail";
import StarShipDetails from "../starships/starShipDetail";
import FilmList from "../films/filmList";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/peoples" component={PeopleList} />
          <Route path="/planets" component={PlanetList} />
          <Route path="/starships" component={StarShipsList} />
          <Route path="/people/:id" exact component={PeopleDetails} />
          <Route path="/planet/:id" exact component={PlanetDetails} />
          <Route path="/starship/:id" exact component={StarShipDetails} />
          <Route path="/films" component={FilmList} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
