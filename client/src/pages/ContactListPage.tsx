import { memo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import {
  useGetContactGroupsQuery,
  useGetContactsQuery
} from "src/redux/contactsReducer";
import { ContactDto } from "src/types/dto/ContactDto";

export const ContactListPage = memo(() => {
  const [filter, setFilter] = useState({ name: "", groupId: "" });
  const { data: contacts, isLoading: contactsLoading } = useGetContactsQuery();
  const { data: groups, isLoading: groupsLoading } = useGetContactGroupsQuery();

  if (contactsLoading || groupsLoading) {
    return <>Loading...</>;
  }

  const filterContacts = (contact: ContactDto) => {
    let groupFilterPassed = true;
    let nameFilterPassed = true;

    if (filter.groupId && filter.groupId !== "Select group") {
      const group = groups?.find(
        (g) => g.id.toLowerCase() === filter.groupId.toLowerCase()
      );
      groupFilterPassed = group ? group.contactIds.includes(contact.id) : false;
    }

    if (filter.name) {
      nameFilterPassed = contact.name
        .toLowerCase()
        .includes(filter.name.toLowerCase());
    }

    return groupFilterPassed && nameFilterPassed;
  };

  const filteredContacts = contacts ? contacts.filter(filterContacts) : [];

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    setFilter({ name: fv.name || "", groupId: fv.groupId || "" });
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
