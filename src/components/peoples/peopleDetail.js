import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Label, Container, Image } from "semantic-ui-react";
import * as peopleActions from "../../redux/actions/peoples/peopleActions";
import img from "../images/star-wars.jpg";

class PeopleDetails extends Component {
  componentDidMount() {
    const peopleId = this.props.match.params.id;
    this.props.actions.getPeopleDetails(peopleId);
  }
  render() {
    const { peopleDetails } = this.props;
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
          <Label centered style={{ marginTop: "20px" }} color="yellow">
            <h1 style={{ color: "black" }}>{peopleDetails.name}</h1>
          </Label>
        </div>
        <Table
          celled
          inverted
          selectable
          style={{
            marginTop: "20px 0 20px ",
            backgroundColor: "black",
          }}
        >
          <Table.Body style={{ color: "#ffcc00" }}>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Name</strong>
              </Table.Cell>
              <Table.Cell>{peopleDetails.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Birth Year</strong>
              </Table.Cell>
              <Table.Cell>{peopleDetails.birth_year}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Height</strong>
              </Table.Cell>
              <Table.Cell>{peopleDetails.height}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Mass</strong>
              </Table.Cell>
              <Table.Cell>{peopleDetails.mass}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Skin Color</strong>
              </Table.Cell>
              <Table.Cell>{peopleDetails.skin_color}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Eye Color</strong>
              </Table.Cell>
              <Table.Cell>{peopleDetails.eye_color}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Gender</strong>
              </Table.Cell>
              <Table.Cell>{peopleDetails.gender}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell style={{ color: "red" }}>
                <strong>Films</strong>
              </Table.Cell>
              <Table.Cell>
                {peopleDetails?.films?.map((f) => (
                  <code style={{ display: "block" }}>{f}</code>
                ))}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    peopleDetails: state.selectedPeopleReducer,
    selectedFilms: state.filmReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPeopleDetails: bindActionCreators(
        peopleActions.getPeopleDetails,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetails);
