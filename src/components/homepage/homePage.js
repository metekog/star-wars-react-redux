import React from "react";
import { Container, Header, Image } from "semantic-ui-react";
import EmbedCard from "../toolbox/embedCard";
import HomeCard from "../toolbox/homeCard";
import img from "../images/home2.jpg";

const HomePage = () => (
  <div>
    <Image src={img} style={{ width: "100%", marginTop: "30px" }} />
    <HomeCard />
    <Container>
      <Header
        as="h1"
        style={{
          height: "7rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
        }}
      >
        TRAILERS
      </Header>
      <EmbedCard />
    </Container>
  </div>
);

export default HomePage;
