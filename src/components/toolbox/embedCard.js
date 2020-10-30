import React from "react";
import { Embed, Grid } from "semantic-ui-react";
import img from "../images/trailer.jpg";

const EmbedCard = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Embed
          icon="right circle arrow"
          placeholder={img}
          url="https://www.youtube.com/embed/sGbxmsDFVnE"
        />
      </Grid.Column>

      <Grid.Column>
        <Embed
          icon="right circle arrow"
          placeholder={img}
          url="https://www.youtube.com/embed/sGbxmsDFVnE"
        />
      </Grid.Column>
      <Grid.Column>
        <Embed
          icon="right circle arrow"
          placeholder={img}
          url="https://www.youtube.com/embed/sGbxmsDFVnE"
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default EmbedCard;
