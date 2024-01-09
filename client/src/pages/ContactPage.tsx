import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { useGetContactsQuery } from "src/redux/contactsReducer";

export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>();

  const { data: contacts } = useGetContactsQuery();

  const contact = contacts?.find((c) => c.id === contactId);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
