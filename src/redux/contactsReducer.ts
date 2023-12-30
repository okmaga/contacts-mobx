import { ContactDto } from "./../types/dto/ContactDto";
import { DATA_CONTACT } from "src/__data__";
import { CONTACT_FILTER } from "./actions";
import { ContactActionTypes } from "./actions";

interface ContactsState {
  contacts: ContactDto[];
  filter: string;
  filteredContacts: ContactDto[] | [];
}

const initialState: ContactsState = {
  contacts: DATA_CONTACT,
  filter: "",
  filteredContacts: []
};

export function contactsReducer(
  state: ContactsState = initialState,
  action: ContactActionTypes
): ContactsState {
  switch (action.type) {
    case CONTACT_FILTER:
      return {
        ...state,
        filter: action.payload.str,
        filteredContacts: state.contacts.filter((c: ContactDto) =>
          c.name.includes(action.payload.str)
        )
      };

    default:
      return state;
  }
}
