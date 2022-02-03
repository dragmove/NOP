import React, { ReactElement } from "react";
import styled from "styled-components";

export const Copyright = (): ReactElement => {
  return (
    <Wrap>
      <CopyrightMark>&#9400;</CopyrightMark> <Year>2022</Year> Hyunseok.Kim
    </Wrap>
  );
};

const Wrap = styled.address`
  display: inline-block;
  position: relative;
  left: 33px;
  bottom: 45px;
  font-family: "Carme", "Lato", Roboto, Ubuntu, san-serif;
  font-size: 11px;
  color: #fff;
  letter-spacing: 0.05em;
  opacity: 0.75;
`;

const CopyrightMark = styled.span`
  font-size: 12px;
  font-family: "Lato", Roboto, Ubuntu, san-serif;
`;

const Year = styled.span`
  font-size: 10px;
  font-family: "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
`;
