import React, { ReactElement } from "react";
import styled from "styled-components";
import AwardItem from "./AwardItem";

interface Props {
  data: any[];
}

const AwardList = (props: Props): ReactElement => {
  const { data = [] } = props;

  function renderContents() {
    const items = data.map((award, index) => {
      return (
        <AwardItem
          key={award.id}
          index={index + 1}
          awardName={award.award}
          year={award.year}
          prize={award.prize}
          projectName={award.name}
        />
      );
    });

    return <ListWrap>{items}</ListWrap>;
  }

  return renderContents();
};

export default AwardList;

const ListWrap = styled.ul`
  position: relative;
  margin: 40px auto 0;
  width: 314px;
`;
