import { eq } from "@shared/utils/common";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  index: number;
  rank: string;
}

const ServiceRankItem = (props: Props): ReactElement => {
  const { index, rank = "" } = props;

  return (
    <Wrap className={eq(index)(1) ? "first" : ""}>
      <Desc>{rank}</Desc>
    </Wrap>
  );
};

export default ServiceRankItem;

const Wrap = styled.li`
  position: relative;
  margin-top: 16px;
  text-align: center;

  &.first {
    margin-top: 0px;
  }
`;

const Desc = styled.p`
  display: inline-block;
  width: 180px;
  font-size: 10px;a
  font-weight: 600;
  font-family: 'Lato', Roboto, Ubuntu, san-serif;
  letter-spacing: 0.1em;
  line-height: 1.65;
  color: #c23420;
  text-decoration: underline;
`;
