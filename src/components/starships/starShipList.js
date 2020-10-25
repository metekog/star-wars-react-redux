import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import * as starShipsActions from "../../redux/actions/starships/starShipActions";
import img from "../images/starships.jpg";
import { Link } from "react-router-dom";

class StarShips extends Component {
  componentDidMount() {
    this.props.actions.getStarShips();
  }

  render() {
    console.log(this.props);
    const { starShips } = this.props;
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Grid columns="3">
          {starShips?.map((x, i) => (
            <Grid.Column key={x.id}>
              <Card
                key={x.id}
                style={{
                  margin: "10px",
                  textAlign: "center",
                  backgroundColor: "black",
                }}
              >
                <Card.Content>
                  <Image floated="right" size="medium" src={img} />
                  <Card.Header style={{ color: "#ffcc00" }}>
                    {x.name}
                  </Card.Header>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Manufacturer</strong>
                    <p>{x.manufacturer}</p>
                  </Card.Description>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Cost in Credits</strong>
                    <p>{x.cost_in_credits}</p>
                  </Card.Description>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Max Speed</strong>
                    <p>{x.max_atmosphering_speed}</p>
                  </Card.Description>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Class</strong>
                    <p>{x.starship_class}</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div>
                    <Link to={`/starship/${i + 2}`}>
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
    starShips: state.starShipListReducer.results,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getStarShips: bindActionCreators(starShipsActions.getStarShips, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarShips);
