import { each, map } from "@shared/utils/common";
import React from "react";
import styled from "styled-components";
import { CareerItem } from "./CareerItem";

// width: 174 --> 652
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

interface Props {
  data: any[];
}

export const CareerList = (props: Props) => {
  const { data } = props;
  console.log("data :", data);

  const items = map(data, (career, index) => {
    console.log("data :", data);
    const companyName = (career.company_eng || "").split(" ")[0] || "";

    const dates = [];
    each((career.date || "").split("-"), (str) => dates.push(str.trim()));

    const dateStart = dates[0] || "",
      dateEnd = dates[1] || "";

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

  return <ListWrap style={{ width: `${99}px` }}>{items}</ListWrap>;
};

/*
export class CareerList extends Component {
  constructor(props) {
    super(props);

    const _ = this;

    _.state = { width: 174 };

    _._animeState = { ..._.state };
    _._animeObj = null;
  }

  componentDidMount() {
    const _ = this,
      { data } = _.props;

    if (gt(0)(careers.length)) {
      _._startAnimation({
        width: 684,
        duration: 650,
        delay: 50,
        easing: "easeOutExpo",
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const _ = this,
      isPropsChanged = not(eq(_.props))(nextProps),
      isStateChanged = not(eq(_.state))(nextState);

    return isPropsChanged || isStateChanged;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const _ = this,
      isPropsChanged = not(eq(JSON.stringify(_.props)))(
        JSON.stringify(prevProps)
      );

    if (isPropsChanged)
      _._startAnimation({
        width: 684,
        duration: 650,
        delay: 50,
        easing: "easeOutExpo",
      });
  }

  render() {
    const _ = this,
      { careers } = _.props;

    const items = careers.map((career, index, array) => {
      const companyName = (career.company_eng || "").split(" ")[0] || "";

      const dates = [];
      each((career.date || "").split("-"), (str) => dates.push(str.trim()));

      const dateStart = dates[0] || "",
        dateEnd = dates[1] || "";

      return (
        <CareerItem
          key={career.id}
          index={index + 1}
          zIndex={array.length - index}
          no={career.id}
          company={companyName}
          companyKor={career.company}
          position={career.position}
          dateStart={dateStart}
          dateEnd={dateEnd}
        />
      );
    });

    return <ListWrap style={{ width: `${_.state.width}px` }}>{items}</ListWrap>;
  }

  _startAnimation(props) {
    const _ = this,
      { width, duration, delay, easing } = props;

    removeAnime(_._animeObj, _._animeState);

    _._animeObj = anime({
      targets: _._animeState,
      width: width,
      duration: duration,
      delay: delay,
      easing: easing,
      update: (anim) => _._updateAnimation(anim),
      begin: null, // anim => _._updateAnimation(anim),
      complete: (anim) => _._updateAnimation(anim),
      autoplay: true,
    });
  }

  _updateAnimation(anim = null) {
    const _ = this;

    if (!_._animeObj) return;

    _.setState({ ..._.state, width: _._animeState.width });
  }
}

CareerList.defaultProps = {
  careers: [],
};

CareerList.propTypes = {
  careers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      company: PropTypes.string,
      company_eng: PropTypes.string,
      position: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};
*/
