import { useInterval } from "@client/utils/hooks/useInterval";
import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { AnimatedRect } from "../animatedRect/AnimatedRect";

interface AnimatedRectLoadingState {
  width: number;
  opacity: number;
  duration: number;
  delay: number;
  easing: string;
}

const ANIMATE_RECT_INTERVAL: number = 2000;

const AnimatedRectLoading = (): ReactElement => {
  const [state, setState] = useState<AnimatedRectLoadingState>({
    width: 40,
    opacity: 1,
    duration: 1750,
    delay: 0,
    easing: "easeInOutSine",
  });

  useInterval(() => {
    setState({
      ...state,
      width: 0,
      opacity: 0,
      duration: 0,
    });

    setState({
      ...state,
      width: 40,
      opacity: 1,
      duration: 1500,
      easing: "easeInOutSine",
    });
  }, ANIMATE_RECT_INTERVAL);

  const renderContents = () => {
    const { width, opacity, duration, delay, easing } = state;

    return (
      <Wrap className="loading-animated-rect">
        <AnimatedRect
          position="absolute"
          backgroundColor="#fff"
          defaultWidth={0}
          defaultHeight={3}
          defaultOpacity={0}
          width={width}
          opacity={opacity}
          duration={duration}
          delay={delay}
          easing={easing}
        />
      </Wrap>
    );
  };

  return renderContents();
};

export default AnimatedRectLoading;

const Wrap = styled.div`
  position: relative;
`;
