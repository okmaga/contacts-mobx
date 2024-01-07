import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppSelector } from "src/redux/hooks";

export const FavoritListPage = memo(() => {
  const favIds = useAppSelector((state) => state.contacts.favoriteContacts);
  const favContacts = useAppSelector((state) => {
    return favIds.reduce((acc, favId) => {
      const contact = state.contacts.contacts.find((c) => c.id === favId);
      if (contact) {
        acc.push(contact);
      }
      return acc;
    }, [] as ContactDto[]);
  });

  return (
    <Row xxl={4} className="g-4">
      {favContacts.length > 0 &&
        favContacts.map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))}
    </Row>
  );
});
