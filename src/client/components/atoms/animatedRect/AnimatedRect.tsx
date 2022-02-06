import { redeem, removeAnime } from "@shared/utils/common";
import anime from "animejs";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Rect, RectProps } from "../shape/Rect";

interface Props extends RectProps {
  defaultWidth?: number;
  defaultHeight?: number;
  defaultX?: number;
  defaultY?: number;
  defaultRotateX?: number;
  defaultRotateY?: number;
  defaultRotateZ?: number;
  defaultSkewX?: number;
  defaultSkewY?: number;
  defaultOpacity?: number;
  duration?: number;
  delay?: number;
  easing?: string;
}

// FIXME: Refactoring
export const AnimatedRect = (props: Props): ReactElement => {
  const {
    // rect props
    position,
    top,
    left,
    defaultWidth,
    defaultHeight,
    defaultX,
    defaultY,
    defaultRotateX,
    defaultRotateY,
    defaultRotateZ,
    defaultSkewX,
    defaultSkewY,
    defaultOpacity,
    width,
    height,
    x,
    y,
    rotateX,
    rotateY,
    rotateZ,
    skewX,
    skewY,
    opacity,
    backgroundColor,
    // anime props
    duration = 1000,
    delay = 0,
    easing = "easeOutExpo",
  } = props;

  // initial state for enter animation
  const [state, setState] = useState({
    width: redeem(defaultWidth, 0),
    height: redeem(defaultHeight, 0),
    x: redeem(defaultX, 0),
    y: redeem(defaultY, 0),
    rotateX: redeem(defaultRotateX, 0),
    rotateY: redeem(defaultRotateY, 0),
    rotateZ: redeem(defaultRotateZ, 0),
    skewX: redeem(defaultSkewX, 0),
    skewY: redeem(defaultSkewY, 0),
    opacity: redeem(defaultOpacity, 1),
  });
  const animeRef = useRef(null);
  const animeStateRef = useRef({ ...state });

  useEffect(() => {
    startAnimation(props);

    return () => removeAnime(animeRef.current, animeStateRef.current);
  }, [props]);

  function startAnimation(props: Partial<Props>): void {
    const {
      width,
      height,
      x,
      y,
      rotateX,
      rotateY,
      rotateZ,
      skewX,
      skewY,
      opacity,
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
      x: redeem(x, state.x),
      y: redeem(y, state.y),
      rotateX: redeem(rotateX, state.rotateX),
      rotateY: redeem(rotateY, state.rotateY),
      rotateZ: redeem(rotateZ, state.rotateZ),
      skewX: redeem(skewX, state.skewX),
      skewY: redeem(skewY, state.skewY),
      opacity: redeem(opacity, state.opacity),
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
      x: obj.x,
      y: obj.y,
      rotateX: obj.rotateX,
      rotateY: obj.rotateY,
      rotateZ: obj.rotateZ,
      skewX: obj.skewX,
      skewY: obj.skewY,
      opacity: obj.opacity,
    });
  }

  return (
    <Rect
      {...props}
      width={state.width}
      height={state.height}
      x={state.x}
      y={state.y}
      rotateX={state.rotateX}
      rotateY={state.rotateY}
      rotateZ={state.rotateZ}
      skewX={state.skewX}
      skewY={state.skewY}
      opacity={state.opacity}
    />
  );
};
