import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const Sandwich = () => (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={3}>
        Slices of bread
      </Form.Label>
      <Col sm={9}>
        <Form.Control type="number" min="0" placeholder="00" />
      </Col>
    </Form.Group>
);
