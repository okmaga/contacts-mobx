import { createStore } from "redux";
import { combineReducers } from "redux";
import { counterReducer } from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  counter: counterReducer
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
