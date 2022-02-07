import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  alt: string;
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
  x: number;
  y: number;
  z: number;
}

const ServiceThumbItem = (props: Props): ReactElement => {
  const { alt, imgUrl, imgWidth, imgHeight, x, y, z } = props;

  // FIXME: fetch image

  return (
    <Wrap x={x} y={y} z={z} imgWidth={imgWidth} imgHeight={imgHeight}>
      <img src={imgUrl} alt={alt} width={imgWidth} />
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
  transform: 
    translate3d(
      ${(props) => props.x}px,
      ${(props) => props.y}px,
      ${(props) => props.z}px
    );
`;
