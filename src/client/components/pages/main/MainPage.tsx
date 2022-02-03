import { Window } from "@client/components/pages/main/templates/window/Window";
import { BREAK_POINTS } from "@client/constants/config";
import { NextPage } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { Motto } from "./templates/motto/Motto";

interface Props {}

const MainPage: NextPage<Props> = (): ReactElement => {
  return (
    <Section>
      <SectionTitle>MAIN</SectionTitle>

      <Article>
        <Window title="studio.vuild" />
        <Motto />
      </Article>
    </Section>
  );
};

export default MainPage;

const Section = styled.section`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: ${BREAK_POINTS.DESKTOP}px) {
    display: block;
  }
`;

const SectionTitle = styled.h2`
  display: none;
`;

const Article = styled.article`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
