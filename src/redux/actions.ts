import { FilterFormValues } from "src/components/FilterForm";

export const CONTACT_FILTER = "CONTACT_FILTER";

interface ContactFilterAction {
  type: typeof CONTACT_FILTER;
  payload: Partial<FilterFormValues>;
}

export function contactFilterActionCreator(
  fv: Partial<FilterFormValues>
): ContactFilterAction {
  return { type: CONTACT_FILTER, payload: fv };
}

export type ContactActionTypes = ContactFilterAction;
