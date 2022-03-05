import { AnimatedMaskWrap } from "@client/components/atoms/animatedMaskWrap/AnimatedMaskWrap";
import { getRandomInt, truthy } from "@shared/utils/common";
import React, { ReactElement, useEffect, useRef, useState } from "react";
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
  const { alt, imgUrl, imgWidth, imgHeight, x, y } = props;
  const maskWrapRef = useRef(null);

  const [state, setState] = useState({
    isLoadComplete: false,
  });

  useEffect(() => {
    if (truthy(state.isLoadComplete)) maskWrapRef.current?.start();
  }, [state.isLoadComplete]);

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
        <img
          src={imgUrl}
          alt={alt}
          width={imgWidth}
          loading="lazy"
          onLoad={() => {
            setState({
              isLoadComplete: true,
            });
          }}
        />
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
