import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Label, Container, Image } from "semantic-ui-react";
import * as planetActions from "../../redux/actions/planets/planetActions";
import img from "../images/star-wars.jpg";

class PlanetDetails extends Component {
  componentDidMount() {
    const planetId = this.props.match.params.id;
    this.props.actions.getPlanetDetails(planetId);
  }
  render() {
    const { planetDetails } = this.props;
    return (
      <Container>
        <Image src={img} size="medium" centered />
        <div
          style={{
            height: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Label style={{ marginTop: "20px" }} color="yellow">
            <h1 style={{ color: "black" }}>{planetDetails.name}</h1>
          </Label>
        </div>
        <Table
          celled
          inverted
          selectable
          style={{
            margin: "20px 0 20px ",
            backgroundColor: "black",
          }}
        >
          <Table.Body style={{ color: "#ffcc00" }}>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Name</strong>
              </Table.Cell>
              <Table.Cell>{planetDetails.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Rotation Period</strong>
              </Table.Cell>
              <Table.Cell>{planetDetails.rotation_period}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Orbital Period</strong>
              </Table.Cell>
              <Table.Cell>{planetDetails.orbital_period}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Diameter</strong>
              </Table.Cell>
              <Table.Cell>{planetDetails.diameter}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Climate</strong>
              </Table.Cell>
              <Table.Cell>{planetDetails.climate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Gravity</strong>
              </Table.Cell>
              <Table.Cell>{planetDetails.gravity}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Terrain</strong>
              </Table.Cell>
              <Table.Cell>{planetDetails.terrain}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Surface Water</strong>
              </Table.Cell>
              <Table.Cell>{planetDetails.surface_water}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Population</strong>
              </Table.Cell>
              <Table.Cell>{planetDetails.population}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    planetDetails: state.selectedPlanetReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPlanetDetails: bindActionCreators(
        planetActions.getPlanetDetails,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetails);
