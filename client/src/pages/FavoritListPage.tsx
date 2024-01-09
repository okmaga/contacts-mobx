import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { useGetFavouriteContactsQuery } from "src/redux/contactsReducer";

export const FavoritListPage = memo(() => {
  const { data: favContacts, isLoading } = useGetFavouriteContactsQuery();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Row xxl={4} className="g-4">
      {favContacts &&
        favContacts.length > 0 &&
        favContacts.map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))}
    </Row>
  );
});
