import { map } from "@shared/utils/common";
import React, { ReactElement } from "react";
import styled from "styled-components";
import ServiceItem from "./ServiceItem";

interface Props {
  data: any[];
}

const ServiceList = (props: Props): ReactElement => {
  const { data = [] } = props;

  function renderContents() {
    const items = map(data, (service, index) => {
      return (
        <ServiceItem
          key={service.id}
          index={index + 1}
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          url={service.url}
          appIcon={service.appIcon}
          thumbnails={service.thumbnails}
          ranks={service.ranks}
          copyright={service.copyright}
        />
      );
    });

    return <ListWrap>{items}</ListWrap>;
  }

  return renderContents();
};

export default ServiceList;

const ListWrap = styled.ul`
  position: relative;
  margin: 40px auto 240px;
  width: 640px;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;
