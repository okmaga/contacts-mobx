import React, { memo, useEffect } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { useAppSelector } from "src/redux/hooks";
import { useAppDispatch } from "src/redux/hooks";
import { contactFilterActionCreator } from "src/redux/actions";

export const ContactListPage = memo(() => {
  const dispatch = useAppDispatch();
  const filteredContacts = useAppSelector(
    (state) => state.contacts.filteredContacts
  );

  const groupContactsList = useAppSelector((state) => state.contacts.groups);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    dispatch(
      contactFilterActionCreator({ name: fv.name, groupId: fv.groupId })
    );
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groupContactsList}
          initialValues={{}}
          onSubmit={onSubmit}
        />
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
