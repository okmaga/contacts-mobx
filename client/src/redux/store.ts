import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsReducer";

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

export type RootState = ReturnType<typeof rootReducer>;
