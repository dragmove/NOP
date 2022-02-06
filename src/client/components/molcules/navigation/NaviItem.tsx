import { eq } from "@shared/utils/common";
import Link from "next/link";
import React, { ReactElement, SyntheticEvent } from "react";
import styled from "styled-components";

interface Props {
  index: number;
  title: string;
  url: string;
  isActive: boolean;
  onClick: (evt: SyntheticEvent, index: number) => void;
}

const NaviItem = (props: Props): ReactElement => {
  const { index, title = "", url = "", isActive = false, onClick } = props;

  const handleLinkBtnClick = (evt: SyntheticEvent, index: number): void => {
    onClick?.(evt, index);
  };

  const renderContents = (): ReactElement => {
    const className = `${getLinkBtnClassName(isActive)}`;
    const href: string = `/views${url}`;

    return (
      <Item className={eq(index)(1) ? "first" : ""}>
        <Link href={href} as={url} passHref>
          <LinkBtn
            className={className}
            onClick={(evt: SyntheticEvent) => handleLinkBtnClick(evt, index)}
          >
            {title}
          </LinkBtn>
        </Link>
      </Item>
    );
  };

  return renderContents();
};

export default NaviItem;

const getLinkBtnClassName = (isActive: boolean): string => {
  return eq(isActive)(true) ? "on" : "";
};

const Item = styled.li`
  margin-top: 8px;

  &.first {
    margin-top: 0;
  }
`;

const LinkBtn = styled.a`
  color: #fff;
  text-decoration: none;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.75);

  &:hover {
    color: #c23420;
    text-decoration: underline;
  }
  &:active {
    text-decoration: line-through;
  }

  &.on {
    color: #c23420;
    text-decoration: line-through;
  }
`;