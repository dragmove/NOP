import { isDefined, redeem, removeAnime } from "@shared/utils/common";
import anime from "animejs";
import React, {
  forwardRef,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

interface Props {
  position?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  defaultWidth?: number;
  defaultHeight?: number;
  width?: number;
  height?: number;
  duration?: number;
  delay?: number;
  easing?: string;
  children: ReactElement;
}

export const AnimatedMaskWrap = forwardRef(
  (props: Props, ref): ReactElement => {
    const {
      position,
      top,
      left,
      defaultWidth,
      defaultHeight,
      width,
      height,
      // anime props
      duration = 1000,
      delay = 0,
      easing = "easeOutExpo",
      children,
    } = props;

    useImperativeHandle(ref, () => ({
      start() {
        startAnimation(props);
      },
    }));

    // initial state for enter animation
    const [state, setState] = useState({
      width: redeem(defaultWidth, 0),
      height: redeem(defaultHeight, 0),
    });
    const animeRef = useRef(null);
    const animeStateRef = useRef({ ...state });

    function startAnimation(props: Partial<Props>): void {
      const {
        width,
        height,
        // anime props
        duration = 1000,
        delay = 0,
        easing = "easeOutExpo",
      } = props;

      removeAnime(animeRef.current, animeStateRef.current);

      animeRef.current = anime({
        targets: animeStateRef.current,
        width: redeem(width, state.width),
        height: redeem(height, state.height),
        duration,
        delay,
        easing,
        update: () => updateAnimation(animeStateRef.current),
        begin: null,
        complete: () => updateAnimation(animeStateRef.current),
        autoplay: true,
      });
    }

    function updateAnimation(obj: Partial<Props>): void {
      if (!obj) return;

      setState({
        width: obj.width,
        height: obj.height,
      });
    }

    return (
      <MaskWrap {...props} width={state.width} height={state.height}>
        {children}
      </MaskWrap>
    );
  }
);

const defaultProps: Partial<Props> = {
  position: "relative",
  width: 0,
  height: 0,
};

const MaskWrap = (props: Partial<Props>): ReactElement => {
  const _props = { ...defaultProps, ...props };
  return <Wrap className="mask-wrap" {..._props} />;
};

const Wrap = styled.div.attrs((props: Props) => ({
  style: {
    position: props.position,
    top: isDefined(props.top) ? `${props.top}px` : "auto",
    right: isDefined(props.right) ? `${props.right}px` : "auto",
    bottom: isDefined(props.bottom) ? `${props.bottom}px` : "auto",
    left: isDefined(props.left) ? `${props.left}px` : "auto",
    width: `${props.width}px`,
    height: `${props.height}px`,
  },
}))`
  overflow: hidden;
`;
