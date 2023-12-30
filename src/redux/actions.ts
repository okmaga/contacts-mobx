export const CONTACT_FILTER = "CONTACT_FILTER";

interface ContactFilterAction {
  type: typeof CONTACT_FILTER;
  payload: {
    str: string;
  };
}

export function contactFilterActionCreator(str: string): ContactFilterAction {
  return { type: CONTACT_FILTER, payload: { str: str } };
}

export type ContactActionTypes = ContactFilterAction;
