import React, { useContext } from "react";
import { atom } from "recoil";

type TrackingLoadingState = {
  isVisible: boolean;
  x: number;
  y: number;
  scale: number;
  progress: number;
};

type BrowserState = {
  width: number;
  height: number;
  scrollTop: number;
};

type NaviState = {
  d1Index: number;
  d2Index: number;
};

export const trackingLoadingState = atom<TrackingLoadingState>({
  key: "trackingLoadingState",
  default: {
    isVisible: true,
    x: 0,
    y: 0,
    scale: 1,
    progress: 0,
  },
});

export const browserState = atom<BrowserState>({
  key: "browserState",
  default: {
    width: 0,
    height: 0,
    scrollTop: 0,
  },
});

export const naviState = atom<NaviState>({
  key: "naviState",
  default: {
    d1Index: 0,
    d2Index: 0,
  },
});

/*
export const store = {
  loading: {
    isVisible: true,
    x: 0,
    y: 0,
    scale: 1,
    progress: 0,
  },
  goTopBtn: {
    isVisible: false,
  },
  browser: {
    width: 0,
    height: 0,
    scrollTop: 0,
  },
  navi: {
    d1Index: 0,
    d2Index: 0,
  },
};
*/
