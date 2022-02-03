import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  title: ReactNode;
}

export const Window = (props: Props): ReactElement => {
  return (
    <WindowFrame>
      <Title>{props.title}</Title>
    </WindowFrame>
  );
};

// FIXME: Arrange image path
const windowEmptyImgPath = "/assets/img/window_empty.png";

const Title = styled.p`
  position: relative;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-family: "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.04em;
  opacity: 0.7;
  color: #ffffff;
  top: 28px;
  left: 9px;
  font-size: 15px;
  font-weight: 100;
`;

const WindowFrame = styled.div`
  margin: 0 auto;
  background: transparent url(${windowEmptyImgPath}) 0 0 no-repeat;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  perspective: 500px;
  perspective-origin: 50% 50%;
  width: 112px;
  height: 113px;
`;
