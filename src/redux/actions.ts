export const INCREMENT_ACTION = "INCREMENT";

interface IncrementAction {
  type: typeof INCREMENT_ACTION;
  payload: {
    id: string | number;
  };
}

export function IncrementActionCreator(id: string | number) {
  return { type: INCREMENT_ACTION, payload: { id } };
}

export type ActionTypes = IncrementAction;
