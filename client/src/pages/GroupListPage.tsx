import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useAppSelector } from "src/redux/hooks";

export const GroupListPage = memo(() => {
  const groups = useAppSelector((state) => state.contacts.groups);
  return (
    <Row xxl={4}>
      {groups.map((group) => (
        <Col key={group.id}>
          <GroupContactsCard group={group} withLink />
        </Col>
      ))}
    </Row>
  );
});
