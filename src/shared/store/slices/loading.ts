import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isDefined } from "@shared/utils/common";

export interface LoadingState {
  isVisible: boolean;
  x: number;
  y: number;
  scale: number;
  progress: number;
}

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isVisible: true,
    x: 0,
    y: 0,
    scale: 1,
    progress: 0,
  },
  reducers: {
    updateVisible: (state, action: PayloadAction<Partial<LoadingState>>) => {
      state.isVisible = action.payload.isVisible;
    },
    updatePosition: (state, action: PayloadAction<Partial<LoadingState>>) => {
      const { x, y } = action.payload;

      if (isDefined(x)) {
        state.x = x;
      }
      if (isDefined(y)) {
        state.y = y;
      }
    },
    updateScale: (state, action: PayloadAction<Partial<LoadingState>>) => {
      state.scale = action.payload.scale;
    },
    updateProgress: (state, action: PayloadAction<Partial<LoadingState>>) => {
      state.progress = action.payload.progress;
    },
  },
});

export const { updateVisible, updatePosition, updateProgress, updateScale } =
  loadingSlice.actions;

export default loadingSlice.reducer;
