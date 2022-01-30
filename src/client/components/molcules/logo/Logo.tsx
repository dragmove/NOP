import { BREAK_POINTS } from "@client/constants/config";
import React from "react";
import styled from "styled-components";

interface Props {}

const Logo = (props: Props) => {
  return (
    <Wrap className="logo">
      <StyledLink>
        <JobTitle>Front-end Developer</JobTitle>
      </StyledLink>
    </Wrap>
  );
};

export default Logo;

const Wrap = styled.h1`
  display: none;
  position: absolute;
  padding: 10px 0 0;
  top: 45px;
  left: 32px;
  border-top: 4px solid #fff;

  @media only screen and (min-width: ${BREAK_POINTS.DESKTOP}px) {
    display: block;
  }
`;

const JobTitle = styled.p`
  font-size: 14px;
  font-family: "liberation_sansbold_italic", "Carme", "Lato", Roboto, Ubuntu,
    san-serif;
  text-decoration: underline;
  color: #ffffff;
`;

const Desc = styled.p`
  margin-top: 14px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Gothic A1", "Nanum Gothic", dotum, verdana, Arial, applegothic,
    sans-serif;
  letter-spacing: 0.05em;
  line-height: 1.15;
  color: #ffffff;
`;

const StyledLink = styled.div`
  display: block;
  width: 144px;
  height: 90px;
  text-decoration: none;
  color: #fff;
`;
