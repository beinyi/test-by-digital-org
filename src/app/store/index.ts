import { combineReducers, configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
