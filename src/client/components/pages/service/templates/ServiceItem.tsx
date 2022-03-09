import { eq, getRandomInt, map, reduce } from "@shared/utils/common";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import ServiceRankItem from "./ServiceRankItem";
import ServiceThumbItem from "./ServiceThumbItem";

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface AppIcon {
  url: string;
  width: number;
  height: number;
}

interface ThumbListPosition {
  x: number;
  y: number;
}

interface Props {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  appIcon: AppIcon;
  thumbnails: Thumbnail[];
  ranks: string[];
  copyright: string;
}

function getThumbListWidth(thumbnails: Thumbnail[]): number {
  return reduce(thumbnails, (acc, thumb) => acc + thumb.width, 0);
}

const ServiceItem = (props: Props): ReactElement => {
  const {
    index,
    title,
    subtitle,
    description,
    url,
    appIcon,
    thumbnails,
    ranks,
  } = props;

  const [thumbItemPositions, setThumbItemPositions] = useState<
    ThumbListPosition[]
  >([]);

  useEffect(() => {
    setThumbItemPositions(
      map(thumbnails, (thumb, index) => {
        let x = 0,
          y = 0;
        if (thumbnails.length > 1) {
          x = index * getRandomInt(-50, 50);
          y = index * getRandomInt(-25, 25);
        }
        return { x, y };
      })
    );
  }, []);

  const thumbListWidth: number = useMemo(
    () => getThumbListWidth(thumbnails),
    [thumbnails.length]
  );

  const rankItems: ReactElement[] =
    ranks.length &&
    ranks.map((rank, index) => {
      return <ServiceRankItem key={index + 1} index={index + 1} rank={rank} />;
    });

  function generateThumbItems(): ReactElement[] {
    return map(thumbnails, (thumb, index) => {
      const position = thumbItemPositions[index];
      return (
        <ServiceThumbItem
          key={`service-thumb-item-${index}`}
          alt={title}
          imgUrl={thumb.url}
          imgWidth={thumb.width}
          imgHeight={thumb.height}
          x={position.x}
          y={position.y}
        />
      );
    });
  }

  return (
    <Wrap className={eq(index)(1) && "first"}>
      {appIcon && (
        <AppIcon
          src={appIcon.url}
          width={appIcon.width}
          height={appIcon.height}
          alt={title}
        />
      )}

      <Title>{title}</Title>

      {subtitle && <Subtitle>{subtitle}</Subtitle>}

      {url && (
        <Link href={url} target="_blank" rel="noopener noreferrer">
          Go
        </Link>
      )}

      {description && <Description>{description}</Description>}

      {thumbItemPositions.length && (
        <ThumbList width={thumbListWidth}>{generateThumbItems()}</ThumbList>
      )}

      {rankItems.length && <RankList>{rankItems}</RankList>}

      {/* 
      <Year className="year">{year}</Year>
      <Section className="section">{prize}</Section>
      <Project className="project">{projectName}</Project>
       */}
    </Wrap>
  );
};

export default ServiceItem;

const Wrap = styled.li`
  position: relative;
  box-sizing: border-box;
  margin: 180px auto 0;

  &.first {
    margin-top: 0px;
  }
`;

const AppIcon = styled.img`
  display: block;
  position: relative;
  margin: 0 auto;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 22%;
`;

const Title = styled.strong`
  display: block;
  position: relative;
  margin-top: 22px;
  font-size: 23px;
  font-weight: 500;
  font-family: "Montserrat", "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Montserrat", "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
  text-align: center;
`;

const Link = styled.a.attrs((props) => ({
  rel: props.rel,
}))`
  display: block;
  margin: 36px auto 0;
  padding: 6px 0 6px;
  width: 84px;
  background-color: #c23420;
  font-weight: 600;
  font-family: "Carme", Roboto, Ubuntu, san-serif;
  font-size: 11px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.15em;
  border-radius: 4px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #d32f2f;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.95);
  }
`;

const Description = styled.p`
  margin: 36px auto 0;
  width: 320px;
  font-size: 11px;
  font-weight: 400;
  font-family: "Carme", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  line-height: 17px;
  color: #fff;
  opacity: 0.65;
`;

const ThumbList = styled.ul`
  position: relative;
  margin: 75px auto 0;
  width: ${(props) => props.width}px;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const RankList = styled.ul`
  display: inline-block;
  position: absolute;
  margin-top: -50%;
  right: 0;
  padding: 12px;
  background-color: #fff;
  box-shadow: 4px 9px 0px rgba(194, 52, 32, 1);
  transform: translateX(35%) skewY(-3deg);
`;
