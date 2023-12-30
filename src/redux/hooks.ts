import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore
} from "react-redux";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ContactActionTypes } from "./actions";
import { RootState } from "./store";

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, ContactActionTypes>
>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>;
