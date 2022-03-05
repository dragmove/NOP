import { redeem } from "@shared/utils/common";
import PropTypes from "prop-types";
import { FC, ReactElement } from "react";
import styled from "styled-components";

interface PropTypes {
  width?: number;
  height?: number;
  href?: string;
  target?: string;
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconX?: number;
  iconY?: number;
  alt?: string;
}

const ContactCircleIconLinkButton: FC<PropTypes> = (
  props: PropTypes
): ReactElement => {
  const {
    width = 16,
    height = 16,
    href,
    target = "_blank",
    iconSrc = "",
    iconWidth = 16,
    iconHeight = 16,
    iconX = 0,
    iconY = 0,
    alt,
  } = props;

  return (
    <Link
      href={redeem(href, "#")}
      target={target}
      width={width}
      height={height}
      rel={getRel(target)}
    >
      <LinkImg
        src={iconSrc}
        width={iconWidth}
        height={iconHeight}
        x={iconX}
        y={iconY}
        alt={alt}
      />
    </Link>
  );
};

export default ContactCircleIconLinkButton;

function getRel(target: string): string {
  return target === "_blank" ? `rel="noopener noreferrer"` : "";
}

const Link = styled.a.attrs((props) => ({
  rel: props.rel,
}))`
  display: block;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  line-height: ${(props) => props.height}px;
  text-align: center;
`;

const LinkImg = styled.img`
    transform: translateX(${(props) => props.x}px);
    translateY(${(props) => props.y}px);
  `;
