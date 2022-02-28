import { AnimatedRect } from "@client/components/atoms/animatedRect/AnimatedRect";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";

// FIXME: Arrange image path
const awardCardBgImgPath = "/assets/img/award_bg.jpg";

interface Props {
  index: number;
  awardName: string;
  year: number;
  prize: string;
  projectName: string;
  x?: number;
  y?: number;
}

const AwardItem = (props: Props): ReactElement => {
  const { index, awardName, year, prize, projectName, x = 0, y = 0 } = props;
  const sectionRef = useRef(null);

  const [state, setState] = useState({
    width: 0,
  });

  useEffect(() => {
    setState({
      width: sectionRef.current.offsetWidth + sectionRef.current.offsetLeft,
    });
  }, []);

  function renderContents(): ReactElement {
    return (
      <Wrap>
        <AnimatedRect
          position="absolute"
          top={32}
          left={5}
          defaultWidth={0}
          width={state.width}
          defaultHeight={50}
          defaultOpacity={1}
          backgroundColor="#fff"
          duration={1000}
          delay={550}
          easing="easeInOutExpo"
        />

        <AwardName className="name">{awardName}</AwardName>

        <Year className="year">{year}</Year>

        <Section className="section" ref={sectionRef}>
          {prize}
        </Section>

        <Project className="project">{projectName}</Project>
      </Wrap>
    );
  }

  return renderContents();
};

export default AwardItem;

const Wrap = styled.li`
  position: relative;
  box-sizing: border-box;
  margin-top: 30px;
  width: 314px;
  height: 87px;
  background: #000 url(${awardCardBgImgPath}) 0 0 no-repeat;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  transform: translate3d(${(props) => props.x}px, ${(props) => props.y}px, 0px);

  &.first {
    margin-top: 0px;
  }
`;

const AwardName = styled.p`
  display: block;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 12px;
  font-weight: 500;
  font-family: "Montserrat", "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
`;

const Year = styled.span`
  position: absolute;
  top: 9px;
  right: 10px;
  font-size: 12px;
  font-weight: 600;
  font-family: "Rubik", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
`;

const Section = styled.p`
  display: block;
  position: absolute;
  top: 40px;
  left: 10px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Montserrat", "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  background: #000 url(${awardCardBgImgPath}) 0 0 no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Project = styled.strong`
  position: absolute;
  top: 60px;
  left: 10px;
  font-size: 12px;
  font-weight: 500;
  font-family: "Montserrat", "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  background: #000 url(${awardCardBgImgPath}) 0 0 no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
