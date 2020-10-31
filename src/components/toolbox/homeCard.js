import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image, Container } from "semantic-ui-react";
import img from "../images/star-wars.jpg";
import img2 from "../images/planets.jpg";
import img3 from "../images/starships.jpg";

const HomeCard = () => (
  <Container>
    <Card.Group centered style={{ marginTop: "30px" }}>
      <Card
        style={{
          marginTop: "10px",
          textAlign: "center",
          backgroundColor: "black",
        }}
      >
        <Card.Content>
          <Image floated="right" size="medium" src={img} />
          <Card.Header style={{ color: "#ffcc00" }}>All Peoples</Card.Header>
          <Card.Description style={{ color: "#ffcc00" }}>
            All <strong>Star Wars</strong> Peoples
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui three buttons">
            <Button as={Link} to="/peoples" basic color="yellow">
              Details
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card
        style={{
          margin: "10px",
          textAlign: "center",
          backgroundColor: "black",
        }}
      >
        <Card.Content>
          <Image floated="right" size="medium" src={img2} />
          <Card.Header style={{ color: "#ffcc00" }}>Planets</Card.Header>
          <Card.Description style={{ color: "#ffcc00" }}>
            All <strong>Star Wars</strong> Planets
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui three buttons">
            <Button as={Link} to="planets" basic color="yellow">
              Details
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card
        style={{
          marginTop: "10px",
          textAlign: "center",
          backgroundColor: "black",
        }}
      >
        <Card.Content>
          <Image floated="right" size="medium" src={img3} />
          <Card.Header style={{ color: "#ffcc00" }}>Starships</Card.Header>
          <Card.Description style={{ color: "#ffcc00" }}>
            All <strong>Star Wars</strong> Starships
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui four buttons">
            <Button as={Link} to="/starships" basic color="yellow">
              Details
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
);

export default HomeCard;
