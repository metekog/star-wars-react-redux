import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Label, Container, Image } from "semantic-ui-react";
import * as starShipActions from "../../redux/actions/starships/starShipActions";
import img from "../images/star-wars.jpg";

class StarShipDetails extends Component {
  componentDidMount() {
    const shipId = this.props.match.params.id;
    this.props.actions.getStarShipDetails(shipId);
  }
  render() {
    const { starShipDetails } = this.props;
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
            <h1 style={{ color: "black" }}>{starShipDetails.name}</h1>
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
              <Table.Cell>{starShipDetails.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Model</strong>
              </Table.Cell>
              <Table.Cell>{starShipDetails.model}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Manufacturer</strong>
              </Table.Cell>
              <Table.Cell>{starShipDetails.manufacturer}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Cost In Credits</strong>
              </Table.Cell>
              <Table.Cell>{starShipDetails.cost_in_credits}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Length</strong>
              </Table.Cell>
              <Table.Cell>{starShipDetails.length}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Max Atmosphering Speed</strong>
              </Table.Cell>
              <Table.Cell>{starShipDetails.max_atmosphering_speed}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Crew</strong>
              </Table.Cell>
              <Table.Cell>{starShipDetails.crew}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Passengers</strong>
              </Table.Cell>
              <Table.Cell>{starShipDetails.passengers}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Consumables</strong>
              </Table.Cell>
              <Table.Cell>{starShipDetails.consumables}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    starShipDetails: state.selectedShipReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getStarShipDetails: bindActionCreators(
        starShipActions.getStarShipDetails,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarShipDetails);
