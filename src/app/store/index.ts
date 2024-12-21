import { combineReducers, configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/reducer";
import pointsReducer from "./points/reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  points: pointsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
