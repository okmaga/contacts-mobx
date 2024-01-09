import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useGetContactGroupsQuery } from "src/redux/contactsReducer";

export const GroupListPage = memo(() => {
  const { data: groups } = useGetContactGroupsQuery();
  return (
    <Row xxl={4}>
      {groups &&
        groups.map((group) => (
          <Col key={group.id}>
            <GroupContactsCard group={group} withLink />
          </Col>
        ))}
    </Row>
  );
});
