import { AnimatedMaskWrap } from "@client/components/atoms/animatedMaskWrap/AnimatedMaskWrap";
import { getRandomInt } from "@shared/utils/common";
import React, { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";

interface Props {
  alt: string;
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
  x: number;
  y: number;
}

const ServiceThumbItem = (props: Props): ReactElement => {
  const { alt, imgUrl, imgWidth, imgHeight, x, y, z } = props;
  const maskWrapRef = useRef(null);

  useEffect(() => {
    // FIXME: After fetching image, run
    maskWrapRef.current?.start();
  }, []);

  return (
    <Wrap x={x} y={y} imgWidth={imgWidth} imgHeight={imgHeight}>
      <AnimatedMaskWrap
        ref={maskWrapRef}
        top={0}
        left={0}
        defaultWidth={0}
        defaultHeight={imgHeight}
        width={imgWidth}
        duration={750}
        delay={getRandomInt(150, 550)}
      >
        <img src={imgUrl} alt={alt} width={imgWidth} />
      </AnimatedMaskWrap>
    </Wrap>
  );
};

export default ServiceThumbItem;

const Wrap = styled.li`
  display: block;
  position: relative;
  float: left;
  width: ${(props) => props.imgWidth}px;
  height: ${(props) => props.imgHeight}px;
  background-color: #111;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  perspective(2000px);
  transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
`;
