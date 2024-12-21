import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PointsState,
  SetAddPointPayload,
  SetRemovePointPayload,
  SetUpdatePointPayload,
} from "./types";

const initialState: PointsState = {
  points: [],
};

const pointsSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    addPoint(state, action: PayloadAction<SetAddPointPayload>) {
      state.points.push(action.payload);
    },
    updatePoint(state, action: PayloadAction<SetUpdatePointPayload>) {
      const index = state.points.findIndex(
        (point) => point.id === action.payload.id
      );
      if (index !== -1) {
        state.points[index] = action.payload;
      }
    },
    removePoint(state, action: PayloadAction<SetRemovePointPayload>) {
      state.points = state.points.filter(
        (point) => point.id !== action.payload
      );
    },
  },
});

export const { addPoint, updatePoint, removePoint } = pointsSlice.actions;
export default pointsSlice.reducer;
