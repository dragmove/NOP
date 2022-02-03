import { isDefined } from "@shared/utils/common";
import React from "react";
import styled from "styled-components";

// FIXME: Define type
const Wrap = styled.div.attrs((props: any) => ({
  style: {
    position: props.position,
    top: isDefined(props.top) ? `${props.top}px` : "auto",
    right: isDefined(props.right) ? `${props.right}px` : "auto",
    bottom: isDefined(props.bottom) ? `${props.bottom}px` : "auto",
    left: isDefined(props.left) ? `${props.left}px` : "auto",
    width: `${props.width}px`,
    height: `${props.height}px`,
    backgroundColor: props.backgroundColor,
    opacity: props.opacity,
    transform: `translateX(${props.x}px) translateY(${props.y}px) rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg) rotateZ(${props.rotateZ}deg) skewX(${props.skewX}deg) skewY(${props.skewY}deg)`,
    borderRadius: `${props.radius}%`,
    boxShadow: props.boxShadow,
  },
}))`
  perspective: 2000px;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
`;

interface Props {
  position?: string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  width?: number | string;
  height?: number | string;
  x?: number | string;
  y?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  skewX?: number | string;
  skewY?: number | string;
  opacity?: number | string;
  backgroundColor?: string;
  radius?: number | string;
  boxShadow?: string;
}

const defaultProps: Props = {
  position: "relative",
  width: 100,
  height: 100,
  x: 0,
  y: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  skewX: 0,
  skewY: 0,
  opacity: 1,
  backgroundColor: "#000",
  radius: 0,
  boxShadow: "none",
};

export const Rect = (props: Props) => {
  const _props = { ...defaultProps, props };

  return <Wrap className="rect" {..._props} />;
};
