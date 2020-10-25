import React from "react";
import { Embed } from "semantic-ui-react";
import img from "../images/trailer.jpg";

const EmbedCard = () => (
  <Embed
    icon="right circle arrow"
    placeholder={img}
    url="https://www.youtube.com/embed/sGbxmsDFVnE"
  />
);

export default EmbedCard;
