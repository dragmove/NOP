import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isDefined } from "@shared/utils/common";

export interface BrowserState {
  width: number;
  height: number;
  scrollTop: number;
}

export const browserSlice = createSlice({
  name: "browser",
  initialState: {
    width: 0,
    height: 0,
    scrollTop: 0,
  },
  reducers: {
    resizeBrowser: (state, action: PayloadAction<Partial<BrowserState>>) => {
      const { width, height } = action.payload;

      if (isDefined(width)) {
        state.width = width;
      }
      if (isDefined(height)) {
        state.height = height;
      }
    },
    updateBrowserScrollTop: (state, action: PayloadAction<number>) => {
      state.scrollTop = action.payload;
    },
  },
});

export const { resizeBrowser, updateBrowserScrollTop } = browserSlice.actions;

export default browserSlice.reducer;
