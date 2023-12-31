import { memo } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { useAppSelector } from "src/redux/hooks";

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const group = useAppSelector((state) =>
    state.contacts.groups.find((g) => g.id === groupId)
  );

  const groupMembers = useAppSelector((state) =>
    state.contacts.contacts.filter((c) => {
      return group?.contactIds.includes(c.id);
    })
  );

  return (
    <Row className="g-4">
      {group ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard group={group} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {groupMembers.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});
