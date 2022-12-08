import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About</SectionTitle>
      <SectionText>
        PC enthusiast and tech nerd. I've always been fascinated by coding and
        have tried some coding in Python. After a lot of modding and setting up
        servers for various games, I realized that coding is something I want to
        do. So far I've obtained knowledge about HTML, CSS, JavaScript, React,
        Next.js, Photoshop, Illustrator, Blender and Figma.
      </SectionText>
      <SectionText>
        I have been a gamer since the SNES launched in Norway back in 1992. I've
        owned and played on a lot of consoles and got into PC gaming at an early
        age. This hobby has been following me my whole life.
      </SectionText>
      <SectionText>
        I'm also quite interested in graphic design and have some education in
        that trade. I've also tried my hands on 3D modeling, game development,
        drawing, animating and music production.
      </SectionText>
      <CarouselContainer></CarouselContainer>
    </Section>
  );
};

export default Timeline;
