import { ContactDto } from "./../types/dto/ContactDto";
import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__";
import { CONTACT_FILTER } from "./actions";
import { ContactActionTypes } from "./actions";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

interface ContactsState {
  contacts: ContactDto[];
  groups: GroupContactsDto[];
  filterValues: {
    name: string;
    groupId: string;
  };
  filteredContacts: ContactDto[] | [];
  favoriteContacts: FavoriteContactsDto;
}

const initialState: ContactsState = {
  contacts: DATA_CONTACT,
  groups: DATA_GROUP_CONTACT,
  filterValues: {
    name: "",
    groupId: ""
  },
  filteredContacts: DATA_CONTACT,
  favoriteContacts: [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id
  ]
};

export function contactsReducer(
  state: ContactsState = initialState,
  action: ContactActionTypes
): ContactsState {
  switch (action.type) {
    case CONTACT_FILTER:
      const { name, groupId } = action.payload;

      let filteredContacts = state.contacts;

      if (groupId) {
        const group = state.groups.find((g) => g.id === groupId);
        if (group) {
          filteredContacts = filteredContacts.filter((contact) =>
            group.contactIds.includes(contact.id)
          );
        } else {
          filteredContacts = groupId === "Select group" ? state.contacts : [];
        }
      }

      if (name) {
        filteredContacts = filteredContacts.filter((c) =>
          c.name.includes(name)
        );
      }

      return {
        ...state,
        filterValues: {
          name: name || "",
          groupId: groupId || ""
        },
        filteredContacts: filteredContacts
      };

    default:
      return state;
  }
}
