import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore
} from "react-redux";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ActionTypes } from "./actions";
import { RootState } from "./store";

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, ActionTypes>
>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>;
