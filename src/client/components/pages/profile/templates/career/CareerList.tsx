import { each, map, removeAnime } from "@shared/utils/common";
import anime from "animejs";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CareerItem from "./CareerItem";

interface Props {
  data: any[];
}

const CareerList = (props: Props): ReactElement => {
  const { data = [] } = props;

  const [state, setState] = useState({
    width: 174,
  });
  const animeRef = useRef(null);
  const animeStateRef = useRef({ ...state });

  useEffect(() => {
    if (data.length <= 0) return;

    startAnimation({
      width: 174 * data.length + -6 * (data.length - 1),
      duration: 650,
      delay: 50,
      easing: "easeOutExpo",
    });
  }, [data.length]);

  function startAnimation(props): void {
    const { width, duration, delay, easing } = props;

    removeAnime(animeRef.current, animeStateRef.current);

    animeRef.current = anime({
      targets: animeStateRef.current,
      width: width,
      duration: duration,
      delay: delay,
      easing: easing,
      update: () => updateAnimation(animeStateRef.current),
      begin: null,
      complete: () => updateAnimation(animeStateRef.current),
      autoplay: true,
    });
  }

  function updateAnimation(obj) {
    setState({
      ...state,
      width: obj.width,
    });
  }

  function renderContents() {
    const items = map(data, (career, index) => {
      const companyName = getCompanyName(career.company_eng);
      const { dateStart, dateEnd } = getDates(career.date);

      return (
        <CareerItem
          key={career.id}
          index={index + 1}
          zIndex={data.length - index}
          no={career.id}
          company={companyName}
          companyKor={career.company}
          position={career.position}
          dateStart={dateStart}
          dateEnd={dateEnd}
        />
      );
    });

    return <ListWrap style={{ width: `${state.width}px` }}>{items}</ListWrap>;
  }

  return renderContents();
};

export default CareerList;

const getCompanyName = (str: string): string => (str || "").split(" ")[0] || "";

const getDates = (
  str: string
): {
  dateStart: string;
  dateEnd: string;
} => {
  const dates = [];
  each((str || "").split("-"), (str: string) => dates.push(str.trim()));

  return {
    dateStart: dates[0] || "",
    dateEnd: dates[1] || "",
  };
};

const ListWrap = styled.ul`
  position: relative;
  margin: 40px auto 0;
  width: ${(props) => props.width}px;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;
