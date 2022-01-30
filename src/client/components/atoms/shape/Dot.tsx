import { eq, not } from "@shared/utils/common";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  radius?: number;
  backgroundColor?: string;
  borderRadius?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  opacity?: number;
}

export const Dot = ({
  radius = 2,
  backgroundColor = "#fff",
  borderRadius = "50%",
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto",
  opacity = 1,
}: Props): ReactElement => {
  return (
    <Wrap
      className="dot"
      radius={radius}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      opacity={opacity}
    />
  );
};

const Wrap = styled.div<Props>`
  position: absolute;
  width: ${(props) => props.radius * 2}px;
  height: ${(props) => props.radius * 2}px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  transform: translateX(${(props) => xByProps(props)})
    translateY(${(props) => yByProps(props)});
  opacity: ${(props) => props.opacity};
`;

const xByProps = (props: Props): string => {
  if (!eq(props.left)("auto")) return `-${props.radius}px`;
  if (!eq(props.right)("auto")) return `-${props.radius}px`;
  return "0px";
};

const yByProps = (props: Props): string => {
  if (!eq(props.top)("auto")) return `-${props.radius}px`;
  if (!eq(props.bottom)("auto")) return `-${props.radius}px`;
  return "0px";
};
