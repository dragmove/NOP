import { Dot } from "@client/components/atoms/shape/Dot";
import Logo from "@client/components/molcules/logo/Logo";
import { NextPage, NextPageContext } from "next";
import { Main } from "next/document";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {}

const Index: NextPage<Props> = ({ query }): ReactElement => {
  return (
    <Wrap
      // ref={_._appNodeRef}
      className="app"
      // style={{ width: browser.width, height: browser.height }}
    >
      <Dot
        radius={2}
        left="18px"
        top="18px"
        backgroundColor={"#fff"}
        opacity={0.25}
      />
      <Dot
        radius={2}
        right="18px"
        top="18px"
        backgroundColor={"#fff"}
        opacity={0.25}
      />
      <Dot
        radius={2}
        right="18px"
        bottom="18px"
        backgroundColor={"#fff"}
        opacity={0.25}
      />
      <Dot
        radius={2}
        left="18px"
        bottom="18px"
        backgroundColor={"#fff"}
        opacity={0.25}
      />

      {/* FIXME: Add Main Component */}
      {/* <Main /> */}

      <header>
        <Logo />
      </header>
    </Wrap>
  );
};

export async function getServerSideProps(ctx: NextPageContext): Promise<{
  props: any;
}> {
  const query = {
    name: ctx.query.name || null,
  };
  return { props: { query } };
}

export default Index;

const Wrap = styled.div`
  background-color: #f00;
`;
