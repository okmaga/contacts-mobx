import { ContactDto } from "../types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApiSlice = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3142/" }),
  endpoints: (builder) => {
    return {
      getContacts: builder.query<ContactDto[], void>({
        query: () => ({ url: "contacts" })
      }),

      getFavouriteContacts: builder.query<ContactDto[], void>({
        query: () => ({ url: "contacts/fav" })
      }),

      getContactGroups: builder.query<GroupContactsDto[], void>({
        query: () => ({ url: "groups" })
      })
    };
  }
});

export const {
  useGetContactsQuery,
  useGetFavouriteContactsQuery,
  useGetContactGroupsQuery
} = contactsApiSlice;
