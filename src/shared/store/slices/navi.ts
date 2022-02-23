import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isDefined } from "@shared/utils/common";

export interface NaviState {
  d1Index: number;
  d2Index: number;
}

export const naviSlice = createSlice({
  name: "navi",
  initialState: {
    d1Index: 0,
    d2Index: 0,
  },
  reducers: {
    updateNavi: (state, action: PayloadAction<Partial<NaviState>>) => {
      const { d1Index, d2Index } = action.payload;

      if (isDefined(d1Index)) {
        state.d1Index = d1Index;
      }
      if (isDefined(d2Index)) {
        state.d2Index = d2Index;
      }
    },
  },
});

export const { updateNavi } = naviSlice.actions;

export default naviSlice.reducer;
