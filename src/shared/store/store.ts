import { configureStore } from "@reduxjs/toolkit";
import browserReducer from "./slices/browser";
import goTopBtnReducer from "./slices/goTopBtn";
import loadingReducer from "./slices/loading";
import naviReducer from "./slices/navi";

export const store = configureStore({
  reducer: {
    navi: naviReducer,
    goTopBtn: goTopBtnReducer,
    loading: loadingReducer,
    browser: browserReducer,

    // FIXME: Add states
    // profile
    // careers
    // awards
    // works
    // services
    // auth
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
