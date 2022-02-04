import { isDefined } from "@shared/utils/common";
import React, { ReactElement } from "react";
import styled from "styled-components";

export interface RectProps {
  position?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  skewX?: number;
  skewY?: number;
  opacity?: number;
  backgroundColor?: string;
  radius?: number;
  boxShadow?: string;
}

const defaultProps: RectProps = {
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

export const Rect = (props: RectProps): ReactElement => {
  const _props = { ...defaultProps, ...props };

  return <Wrap className="rect" {..._props} />;
};

const Wrap = styled.div.attrs((props: RectProps) => ({
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
