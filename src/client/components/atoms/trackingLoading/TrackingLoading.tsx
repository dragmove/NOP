import React, {
  Component,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import anime from "animejs";
import { removeAnime, truthy } from "@shared/utils/common";

/*
const remapProgress = (progress) => {
  if (gt(progress)(0)) {
    progress = 0;
  } else if (lt(progress)(1)) {
    progress = 1;
  }

  return aid.math.remap(progress, 0, 1, 0, 360);
};

const circleGradientStyle = (bgColor, fillColor, degree) => {
  let angle = 0;

  if (gte(degree)(180)) {
    angle = degree + 90;

    return `linear-gradient(${angle}deg, transparent 50%, ${bgColor} 50%), linear-gradient(90deg, ${bgColor} 50%, transparent 50%)`;
  } else {
    angle = degree - 90;

    return `linear-gradient(${angle}deg, transparent 50%, ${fillColor} 50%), linear-gradient(90deg, ${bgColor} 50%, transparent 50%)`;
  }
};

const circleGradientStylePartial = aid.partial(
  circleGradientStyle,
  "#ffffff",
  "#c23420"
);
*/

interface Props {
  top?: number;
  left?: number;
  width: string;
  height: string;
  scale?: number;
  progress?: number;
  isVisible?: boolean;
}

const TrackingLoading = (props: Props): ReactElement => {
  const { top = 0, left = 0 } = props;

  const [state, setState] = useState({
    progress: 0,
  });

  const animeRef = useRef(null);
  const animeStateRef = useRef({ ...state });

  useEffect(() => {
    return () => removeAnime(animeRef.current, animeStateRef.current);
  }, []);

  useEffect(() => {
    // FIXME: ing
    /*
    removeAnime(_._loadingProgressAnime, _._stateForAnime);

    _._loadingProgressAnime = anime({
      targets: _._stateForAnime,
      progress: decimalFloat(_.props.progress),
      duration: 750,
      easing: "easeInOutExpo",
      update: (anim) => {
        // console.log(_._stateForAnime.progress + '%'); // Get current animation progress with `myAnimation.progress`, return value in %
        _.setState({ progress: _._stateForAnime.progress });
      },
      begin: null,
      complete: (anim) => {
        if (gte(1)(_._stateForAnime.progress)) {
          console.log("complete Loading animation");

          _._stateForAnime = { progress: 0 };

          _.setState({ progress: 0 });

          dispatch(updateLoadingProgress(0));
          dispatch(updateLoadingScale(0.25));
        }
      },
      autoplay: true,
    });
    */
  }, [props.progress]);

  const renderContents = () => {
    const { top, left, width, height, scale, isVisible } = props;

    return (
      <Circle
        width={width}
        height={height}
        opacity={truthy(isVisible) ? 1 : 0}
        scale={scale}
        progress={state.progress}
        style={{
          top: `${top}px`,
          left: `${left}px`,
        }}
      />
    );
  };

  return renderContents();
};

export default TrackingLoading;

const Circle = styled.div`
  z-index: 9;
  display: none;
  position: absolute;
  transform: translateX(-50%) translateY(-50%) scale(${(props) => props.scale});
  transition-delay: 0s;
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: ease-out;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #c23420;
  border-radius: 50%;
  background-image: ${(props) =>
    aid.pipeline(props.progress, remapProgress, circleGradientStylePartial)};
  opacity: ${(props) => props.opacity};
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  pointer-events: none;

  @media only screen and (min-width: ${rwdWidths.pc}px) {
    display: block;
  }
`;
