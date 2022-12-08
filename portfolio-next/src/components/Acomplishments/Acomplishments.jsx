import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

let data = [
  { number: 1, text: "Years of coding" },
  { number: 17, text: "Years of illustration experience" },
  { number: 10, text: "Years PC building experience" },
  { number: 14, text: "Years of music production" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>My experience so far</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
