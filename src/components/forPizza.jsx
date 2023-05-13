import { Col, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const Pizza = () => (
  <>
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={3}>
        Number of slices
      </Form.Label>
      <Col sm={9}>
        <Form.Control type="number" min="0" placeholder="00"/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={3}>
        Diameter
      </Form.Label>
      <Col sm={9}>
        <InputGroup className="mb-2">
          <Form.Control type="text" placeholder="00.0"/>
          <InputGroup.Text>cm</InputGroup.Text>
        </InputGroup>
      </Col>
    </Form.Group>
  </>
);
