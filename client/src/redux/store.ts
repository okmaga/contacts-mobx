import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsApiSlice } from "./contactsReducer";

const rootReducer = combineReducers({
  [contactsApiSlice.reducerPath]: contactsApiSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApiSlice.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;
