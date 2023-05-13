import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const Soup = () => (
  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm={3}>
      Spiciness scale
    </Form.Label>
    <Col sm={9}>
      <Form.Range name="spiciness_scale" min="1" max="10" />
      <Form.Text>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </Form.Text>
    </Col>
  </Form.Group>
);
