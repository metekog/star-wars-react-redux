import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import * as peopleActions from "../../redux/actions/peoples/peopleActions";
import img from "../images/star-wars.jpg";
import { Link } from "react-router-dom";

class PeopleList extends Component {
  componentDidMount() {
    this.props.actions.getPeoples();
  }

  render() {
    /* console.log(this.props); */
    const { peoples } = this.props;
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Grid columns="3">
          {peoples?.map((people, i) => (
            <Grid.Column key={i}>
              <Card
                key={people.id}
                style={{
                  margin: "10px",
                  textAlign: "center",
                  backgroundColor: "black",
                }}
              >
                <Card.Content style={{ color: "#ffcc00" }}>
                  <Image floated="right" size="medium" src={img} />
                  <Card.Header style={{ color: "#ffcc00" }}>
                    {people.name}
                  </Card.Header>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Birth</strong>
                    <p>{people.birth_year}</p>
                  </Card.Description>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Gender</strong>
                    <p>{people.gender}</p>
                  </Card.Description>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Height</strong>
                    <p>{people.height}</p>
                  </Card.Description>
                  <Card.Description style={{ color: "white" }}>
                    <strong style={{ color: "red" }}>Mass</strong>
                    <p>{people.mass}</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div>
                    <Link to={`/people/${i + 1}`}>
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
    peoples: state.peopleListReducer.results,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPeoples: bindActionCreators(peopleActions.getPeoples, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
