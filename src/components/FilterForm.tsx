import { Formik } from "formik";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { memo } from "react";
import { FormikConfig } from "formik/dist/types";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { useAppSelector } from "src/redux/hooks";

export interface FilterFormValues {
  name: string;
  groupId: string;
}

interface FilterFormProps extends FormikConfig<Partial<FilterFormValues>> {
  groupContactsList: GroupContactsDto[];
}

export const FilterForm = memo<FilterFormProps>(
  ({ onSubmit, initialValues = {}, groupContactsList }) => {
    const groups = useAppSelector((state) => state.contacts.groups);
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} onChange={handleSubmit}>
            <Row xxl={4} className="g-4">
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    id={"name"}
                    name={"name"}
                    onChange={handleChange}
                    placeholder="name"
                    aria-label="name"
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Select
                  id={"groupId"}
                  name={"groupId"}
                  aria-label="Поиск по группе"
                  onChange={handleChange}
                >
                  <option>Select group</option>
                  {groups.map((group) => (
                    <option value={group.id} key={group.id}>
                      {group.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    );
  }
);
