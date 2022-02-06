import { BREAK_POINTS } from "@client/constants/config";
import { ROUTES } from "@client/constants/routes";
import { eq, map } from "@shared/utils/common";
import React, { ReactElement, SyntheticEvent } from "react";
import styled from "styled-components";
import NaviItem from "./NaviItem";

interface Props {
  d1Index: number;
  d2Index: number;
  onClick: (evt: SyntheticEvent, d1Index: number) => void;
}

const Navi = (props: Props): ReactElement => {
  const { d1Index = 0, d2Index = 0, onClick } = props;

  const handleNaviItemClick = (evt: SyntheticEvent, d1Index: number): void => {
    onClick?.(evt, d1Index);
  };

  const renderContents = (): ReactElement => {
    const items = map(ROUTES, (route, index): ReactElement => {
      const isActive: boolean = eq(d1Index)(index + 1);
      return (
        <NaviItem
          key={route.id}
          index={index + 1}
          title={route.title}
          url={route.url}
          isActive={isActive}
          onClick={handleNaviItemClick}
        />
      );
    });

    return (
      <Wrap>
        <NaviList>{items}</NaviList>
      </Wrap>
    );
  };

  return renderContents();
};

export default Navi;

const Wrap = styled.nav`
  display: none;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;

  @media only screen and (min-width: ${BREAK_POINTS.DESKTOP}px) {
    display: block;
  }
`;

const NaviList = styled.ul`
  position: absolute;
  top: 50%;
  left: 33px;
  font-size: 11px;
  font-family: "Carme", "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  transform: translateY(-50%);
`;
