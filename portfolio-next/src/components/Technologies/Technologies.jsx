import React from "react";
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiZend } from "react-icons/di";
import { SiUnrealengine, SiTypescript } from "react-icons/si";
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
      <br /> From design and front end to testing out some game engines.
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
      </ListItem>
      <ListItem>
        <SiTypescript size="3rem" />
      </ListItem>
      <ListItem>
        <SiUnrealengine size="3rem" />
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
