import DATA_CONTACT_RAW from "./contacts.json";
import DATA_GROUP_CONTACT_RAW from "./group-contacts.json";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

const DATA_CONTACT: ContactDto[] = DATA_CONTACT_RAW as ContactDto[];
const DATA_GROUP_CONTACT: GroupContactsDto[] =
  DATA_GROUP_CONTACT_RAW as GroupContactsDto[];

export { DATA_CONTACT, DATA_GROUP_CONTACT };
