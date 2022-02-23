import { BREAK_POINTS } from "@client/constants/config";
import { truthy } from "@shared/utils/common";
import React, { SyntheticEvent } from "react";
import styled from "styled-components";

export interface GoTopBtnProps {
  isVisible: boolean;
  onClick?: (evt: SyntheticEvent) => void;
}

export const GoTopBtn = ({ isVisible = false, onClick }) => {
  return (
    <Wrap isVisible={isVisible}>
      <Btn onClick={onClick}>Go Top</Btn>
    </Wrap>
  );
};

const Wrap = styled.div.attrs<GoTopBtnProps>(({ isVisible }) => ({
  style: {
    display: truthy(isVisible) ? "block" : "none",
  },
}))`
  position: absolute;
  right: 33px;
  bottom: 43px;

  @media only screen and (min-width: ${BREAK_POINTS.DESKTOP}px) {
    display: none;
  }
`;

const Btn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 11px;
  font-family: "Carme", "Lato", Roboto, Ubuntu, san-serif;
  color: #fff;
  letter-spacing: 0.05em;
  opacity: 0.75;
  cursor: pointer;

  &:hover {
    color: #c23420;
    text-decoration: underline;
    opacity: 1;
  }
  &:active {
    color: #c23420;
    text-decoration: line-through;
    opacity: 1;
  }
  &:focus {
    outline: 0;
  }
`;
