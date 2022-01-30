import { NextPage, NextPageContext } from 'next';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  query: { name?: string };
}

const Index: NextPage<Props> = ({ query }): ReactElement => {
  const name = query.name ? query.name : 'foo';

  return (
    <Wrap>
      <div>Hello, {name}!</div>
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
