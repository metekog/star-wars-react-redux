import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Card, Image, Grid } from "semantic-ui-react";
import * as filmActions from "../../redux/actions/films/filmActions";
import img from "../images/movie.jpg";

class FilmList extends Component {
  componentDidMount() {
    this.props.actions.getFilms();
  }

  render() {
    const { films } = this.props;
    console.log(films);
    return (
      <div>
        <Grid columns="3">
          {films &&
            films.length > 0 &&
            films?.map((x, i) => (
              <Grid.Column key={i}>
                <Card
                  style={{
                    margin: "10px",
                    textAlign: "center",
                    backgroundColor: "black",
                  }}
                >
                  <Image src={img} />
                  <Card.Content>
                    <Card.Header style={{ color: "#ffcc00" }}>
                      {x.title}
                    </Card.Header>
                    <Card.Meta style={{ color: "white" }}>
                      <p style={{ color: "red" }}>Release Date</p>
                      {x.release_date}
                    </Card.Meta>
                    <Card.Meta style={{ color: "white" }}>
                      <p style={{ color: "red" }}>Director</p>
                      {x.director}
                    </Card.Meta>
                    <Card.Meta style={{ color: "white" }}>
                      <p style={{ color: "red" }}>Episode</p>
                      {x.episode_id}
                    </Card.Meta>
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
    films: state.filmListReducer.results,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getFilms: bindActionCreators(filmActions.getFilms, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
