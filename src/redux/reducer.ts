import { ActionTypes, INCREMENT_ACTION } from "./actions";
import { initialState } from "./initialState";
export function counterReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case INCREMENT_ACTION:
      return { value: state.value + 1 };

    default:
      return state;
  }
}
