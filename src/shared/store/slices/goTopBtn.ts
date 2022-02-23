import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GoTopBtnState {
  isVisible: boolean;
}

export const goTopBtnSlice = createSlice({
  name: "goTopBtn",
  initialState: {
    isVisible: false,
  },
  reducers: {
    updateGoTopBtnVisible: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export const { updateGoTopBtnVisible } = goTopBtnSlice.actions;

export default goTopBtnSlice.reducer;
