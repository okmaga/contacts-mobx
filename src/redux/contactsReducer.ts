import { ContactDto } from "./../types/dto/ContactDto";
import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__";
import { CONTACT_FILTER } from "./actions";
import { ContactActionTypes } from "./actions";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterFormValues } from "src/components/FilterForm";
import { log } from "console";

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

const initialContacts: ContactsState = {
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

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {
    filterContacts(state, action: PayloadAction<FilterFormValues>) {
      const { name, groupId } = action.payload;
      let filteredContacts = state.contacts;

      if (groupId) {
        const group = state.groups.find(
          (g) => g.id.toLowerCase() === groupId.toLowerCase()
        );
        if (group) {
          filteredContacts = filteredContacts.filter((contact) =>
            group.contactIds.includes(contact.id)
          );
          console.log(filteredContacts);
        } else {
          filteredContacts = groupId === "Select group" ? state.contacts : [];
        }
      }

      if (name) {
        filteredContacts = filteredContacts.filter((c) =>
          c.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      state.filterValues = {
        name: name || "",
        groupId: groupId || ""
      };
      state.filteredContacts = filteredContacts;
      console.log(groupId);
    }
  }
});

export const { filterContacts } = contactsSlice.actions;
