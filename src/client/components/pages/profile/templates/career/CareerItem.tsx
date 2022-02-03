import { Rect } from "@client/components/atoms/shape/Rect";
import React from "react";
import styled from "styled-components";

// FIXME: Arrange image path
const nameCardBgImgPath = "/assets/img/namecard_bg.jpg";

// -175 --> -15
const Wrap = styled.li.attrs((props) => ({
  style: {
    marginLeft: `${props.marginLeft}px`,
    transform: `translate3d(${props.x}px, ${props.y}px, 0px)`,
  },
}))`
  box-sizing: border-box;
  position: relative;
  float: left;
  padding: 10px;
  width: 174px;
  height: 314px;
  background: #000 url(${nameCardBgImgPath}) 0 0 no-repeat;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.35);
  z-index: ${(props) => props.zIndex};

  &.first {
    margin-left: 0;
  }
`;
/*
const Wrap = styled.li`
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-left: ${props => props.marginLeft}px;
  padding: 10px;
  width: 174px;
  height: 314px;
  background: #000 url(${nameCardBg}) 0 0 no-repeat;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.35);
  transform: translate3d(${props => props.x}px, ${props => props.y}px, 0px);
  z-index: ${props => props.zIndex};

  &.first {
    margin-left: 0;
  }
`;
*/

const No = styled.p`
  position: absolute;
  top: 30px;
  left: 14px;
  font-size: 24px;
  font-weight: 400;
  font-family: "Rubik", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
`;

const CompanyName = styled.strong`
  display: block;
  position: absolute;
  top: 128px;
  left: 15px;
  font-size: 22px;
  font-weight: 500;
  font-family: "Montserrat", "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
`;

const Position = styled.p`
  position: absolute;
  top: 169px;
  left: 16px;
  font-size: 13px;
  font-family: "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
`;

const DateStart = styled.p`
  position: absolute;
  top: 202px;
  left: 16px;
  font-size: 12px;
  font-weight: 300;
  font-family: "Rubik", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.1em;
  color: #fff;
`;

const DateEnd = styled(DateStart)`
  top: 218px;
`;

interface Props {}

export const CareerItem = (props: Props) => {
  return (
    <Wrap className={"first"} x={0} y={0} marginLeft={0} zIndex={0}>
      <Rect
        position="absolute"
        top={20}
        left={15}
        defaultHeight={4}
        width={99}
        height={4}
        x={0}
        y={0}
        backgroundColor="#fff"
      />
    </Wrap>
  );
};

/*
export class CareerItem extends Component {
  constructor(props) {
    super(props);

    const _ = this;

    _.state = {
      y: 0,
      marginLeft: -175,

      animeRectFrames: [
        { width: 144, duration: 750, delay: 350 },
        { width: 144, duration: 750, delay: 350 },
        { width: 144, duration: 750, delay: 350 },
        { width: 77, duration: 750, delay: 350 },
      ],
    };

    _._animeState = { ..._.state };

    delete _._animeState.animeRectFrames;

    _._animeObj = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    const _ = this,
      isStateChanged = not(eq(_.state))(nextState);

    return isStateChanged;
  }

  componentDidMount() {
    const _ = this,
      { index } = _.props;

    _._startAnimation({
      y: getRandomInt(-25, 25),
      marginLeft: eq(index)(1) ? 0 : -6,
      duration: 750,
      delay: 250,
      easing: "easeOutExpo",
    });
  }

  render() {
    const _ = this,
      { index, zIndex, no, company, position, dateStart, dateEnd } = _.props,
      y = _.state.y,
      marginLeft = eq(index)(1) ? 0 : _.state.marginLeft,
      animeRectFrames = _.state.animeRectFrames,
      rect_1 = animeRectFrames[0],
      rect_2 = animeRectFrames[1],
      rect_3 = animeRectFrames[2],
      rect_4 = animeRectFrames[3];

    return (
      <Wrap
        className={eq(index)(1) ? "first" : ""}
        x={0}
        y={y}
        marginLeft={marginLeft}
        zIndex={zIndex}
      >
        <AnimatedRect
          position="absolute"
          top={20}
          left={15}
          defaultHeight={4}
          width={rect_1.width}
          height={4}
          x={rect_1.x}
          y={rect_1.y}
          rotateX={rect_1.rotateX}
          rotateY={rect_1.rotateY}
          rotateZ={rect_1.rotateZ}
          backgroundColor="#fff"
          duration={rect_1.duration}
          delay={rect_1.delay}
        />

        <No>{numberStrHasMinDigit(no, 2)}</No>

        <CompanyName className="company-name">{uppercase(company)}</CompanyName>

        <AnimatedRect
          position="absolute"
          top={157}
          left={15}
          width={rect_2.width}
          defaultHeight={4}
          height={4}
          x={rect_2.x}
          y={rect_2.y}
          rotateX={rect_2.rotateX}
          rotateY={rect_2.rotateY}
          rotateZ={rect_2.rotateZ}
          backgroundColor="#fff"
          duration={rect_2.duration}
          delay={rect_2.delay}
        />

        <Position className="position">{position}</Position>

        <AnimatedRect
          position="absolute"
          top={189}
          left={15}
          width={rect_3.width}
          defaultHeight={4}
          height={4}
          x={rect_3.x}
          y={rect_3.y}
          rotateX={rect_3.rotateX}
          rotateY={rect_3.rotateY}
          rotateZ={rect_3.rotateZ}
          backgroundColor="#fff"
          duration={rect_3.duration}
          delay={rect_3.delay}
        />

        <DateStart className="date-start">{dateStart}</DateStart>

        <AnimatedRect
          position="absolute"
          top={206}
          left={82}
          width={rect_4.width}
          defaultHeight={4}
          height={4}
          x={rect_4.x}
          y={rect_4.y}
          rotateX={rect_4.rotateX}
          rotateY={rect_4.rotateY}
          rotateZ={rect_4.rotateZ}
          backgroundColor="#fff"
          duration={rect_4.duration}
          delay={rect_4.delay}
        />

        <DateEnd className="date-end">{dateEnd}</DateEnd>
      </Wrap>
    );
  }

  _startAnimation(props) {
    const _ = this,
      { y, marginLeft, duration, delay, easing } = props;

    removeAnime(_._animeObj, _._animeState);

    _._animeObj = anime({
      targets: _._animeState,
      y: y,
      marginLeft: marginLeft,
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

    _.setState({
      ..._.state,
      y: _._animeState.y,
      marginLeft: _._animeState.marginLeft,
    });
  }
}

CareerItem.defaultProps = {};

CareerItem.propTypes = {
  index: PropTypes.number,
  zIndex: PropTypes.number,
  no: PropTypes.number,
  company: PropTypes.string,
  position: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
};
*/
