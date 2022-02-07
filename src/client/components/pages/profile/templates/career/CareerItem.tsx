import { AnimatedRect } from "@client/components/atoms/animatedRect/AnimatedRect";
import {
  eq,
  getRandomInt,
  numberStrHasMinDigit,
  removeAnime,
  uppercase,
} from "@shared/utils/common";
import anime from "animejs";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";

// FIXME: Arrange image path
const nameCardBgImgPath = "/assets/img/namecard_bg.jpg";

interface Props {
  index: number;
  zIndex: number;
  no: number;
  company: string;
  companyKor: string;
  position: string;
  dateStart: string;
  dateEnd: string;
}

const CareerItem = (props: Props): ReactElement => {
  const {
    index,
    zIndex,
    no,
    company,
    companyKor,
    position,
    dateStart,
    dateEnd,
  } = props;

  const [state, setState] = useState({
    y: 0,
    rotateZ: 0,
    marginLeft: -175,
    animeRectFrames: [
      {
        width: 144,
        duration: getRandomInt(350, 950),
        delay: getRandomInt(50, 550),
      },
      {
        width: 144,
        duration: getRandomInt(350, 950),
        delay: getRandomInt(50, 550),
      },
      {
        width: 144,
        duration: getRandomInt(350, 950),
        delay: getRandomInt(50, 550),
      },
      {
        width: 77,
        duration: getRandomInt(350, 850),
        delay: getRandomInt(50, 550),
      },
    ],
  });
  const animeRef = useRef(null);
  const animeStateRef = useRef({
    y: state.y,
    rotateZ: state.rotateZ,
    marginLeft: state.marginLeft,
  });

  useEffect(() => {
    startAnimation({
      y: getRandomInt(-25, 25),
      rotateZ: getRandomInt(-1, 1),
      marginLeft: eq(index)(1) ? 0 : -6,
      duration: 750,
      delay: getRandomInt(150, 350),
      easing: "easeOutExpo",
    });

    return () => removeAnime(animeRef.current, animeStateRef.current);
  }, []);

  function startAnimation(obj): void {
    const { y, rotateZ, marginLeft, duration, delay, easing } = obj;

    removeAnime(animeRef.current, animeStateRef.current);

    animeRef.current = anime({
      targets: animeStateRef.current,
      y: y,
      rotateZ: rotateZ,
      marginLeft: marginLeft,
      duration: duration,
      delay: delay,
      easing: easing,
      update: () => updateAnimation(animeStateRef.current),
      begin: null,
      complete: () => updateAnimation(animeStateRef.current),
      autoplay: true,
    });
  }

  function updateAnimation(obj): void {
    setState({
      ...state,
      y: obj.y,
      rotateZ: obj.rotateZ,
      marginLeft: obj.marginLeft,
    });
  }

  function renderContents(): ReactElement {
    const y = state.y,
      rotateZ = state.rotateZ,
      marginLeft = eq(index)(1) ? 0 : state.marginLeft,
      animeRectFrames = state.animeRectFrames,
      rect_1 = animeRectFrames[0],
      rect_2 = animeRectFrames[1],
      rect_3 = animeRectFrames[2],
      rect_4 = animeRectFrames[3];

    return (
      <Wrap
        className={eq(index)(1) ? "first" : ""}
        x={0}
        y={y}
        rotateZ={rotateZ}
        marginLeft={marginLeft}
        zIndex={zIndex}
      >
        <AnimatedRect
          position="absolute"
          top={20}
          left={15}
          defaultHeight={4}
          width={rect_1.width}
          height={4}
          backgroundColor="#fff"
          duration={rect_1.duration}
          delay={rect_1.delay}
        />

        <No>{numberStrHasMinDigit(no, 2)}</No>

        <CompanyName className="company-name">{uppercase(company)}</CompanyName>

        <AnimatedRect
          position="absolute"
          top={157}
          left={15}
          width={rect_2.width}
          defaultHeight={4}
          height={4}
          backgroundColor="#fff"
          duration={rect_2.duration}
          delay={rect_2.delay}
        />

        <Position className="position">{position}</Position>

        <AnimatedRect
          position="absolute"
          top={189}
          left={15}
          width={rect_3.width}
          defaultHeight={4}
          height={4}
          backgroundColor="#fff"
          duration={rect_3.duration}
          delay={rect_3.delay}
        />

        <DateStart className="date-start">{dateStart}</DateStart>

        <AnimatedRect
          position="absolute"
          top={206}
          left={82}
          width={rect_4.width}
          defaultHeight={4}
          height={4}
          backgroundColor="#fff"
          duration={rect_4.duration}
          delay={rect_4.delay}
        />

        <DateEnd className="date-end">{dateEnd}</DateEnd>
      </Wrap>
    );
  }

  return renderContents();
};

export default CareerItem;

// -175 --> -15
const Wrap = styled.li.attrs((props: any) => ({
  style: {
    marginLeft: `${props.marginLeft}px`,
    transform: `translateX(${props.x}px) translateY(${props.y}px) rotateZ(${props.rotateZ}deg)`,
  },
}))`
  box-sizing: border-box;
  position: relative;
  float: left;
  padding: 10px;
  width: 174px;
  height: 314px;
  background: #000 url(${nameCardBgImgPath}) 0 0 no-repeat;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.35);
  z-index: ${(props) => props.zIndex};

  &.first {
    margin-left: 0;
  }
`;

const No = styled.p`
  position: absolute;
  top: 30px;
  left: 14px;
  font-size: 24px;
  font-weight: 400;
  font-family: "Rubik", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
`;

const CompanyName = styled.strong`
  display: block;
  position: absolute;
  top: 128px;
  left: 15px;
  font-size: 22px;
  font-weight: 500;
  font-family: "Montserrat", "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
`;

const Position = styled.p`
  position: absolute;
  top: 169px;
  left: 16px;
  font-size: 13px;
  font-family: "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
`;

const DateStart = styled.p`
  position: absolute;
  top: 202px;
  left: 16px;
  font-size: 12px;
  font-weight: 300;
  font-family: "Rubik", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.1em;
  color: #fff;
`;

const DateEnd = styled(DateStart)`
  top: 218px;
`;
