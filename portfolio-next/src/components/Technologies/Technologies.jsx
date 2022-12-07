import React from "react";
import { DiCodeBadge } from "react-icons/di";
import { SiAdobephotoshop } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in web development.
      <br />
      From design to front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiCodeBadge size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Next.js and TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobephotoshop size="3rem" />
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma, Photoshop, Illustrator and more
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
