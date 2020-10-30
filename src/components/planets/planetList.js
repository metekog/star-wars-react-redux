import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import * as planetActions from "../../redux/actions/planets/planetActions";
import img from "../images/planets.jpg";
import { Link } from "react-router-dom";

class PlanetList extends Component {
  componentDidMount() {
    this.props.actions.getPlanets();
  }

  render() {
    console.log(this.props);
    const { planets } = this.props;
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Grid columns="3">
          {planets?.map((x, i) => (
            <Grid.Column key={x.id}>
              <Card
                key={x.id}
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  backgroundColor: "black",
                }}
              >
                <Card.Content>
                  <Image floated="right" size="midi" src={img} />
                  <Card.Header style={{ color: "#ffcc00" }}>
                    {x.name}
                  </Card.Header>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Terrain</strong>
                    <p>{x.terrain}</p>
                  </Card.Description>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Population</strong>
                    <p>{x.population}</p>
                  </Card.Description>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Diameter</strong>
                    <p>{x.diameter}</p>
                  </Card.Description>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Climate</strong>
                    <p>{x.climate}</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div>
                    <Link to={`/planet/${i + 1}`}>
                      <Button basic color="yellow">
                        Details
                      </Button>
                    </Link>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    planets: state.planetListReducer.results,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPlanets: bindActionCreators(planetActions.getPlanets, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetList);
