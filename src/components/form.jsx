import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Col, Row } from "react-bootstrap";

export const FoodForm = (/* { onChange, children } */) => (
  <Form>
    <FloatingLabel controlId="floatingInput" label="Dish name">
      <Form.Control type="text" placeholder="example" />
    </FloatingLabel>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Row>
        <Col>
          <Form.Label>Preparation time</Form.Label>
        </Col>
        <Col>
          <Form.Control type="number" placeholder="hh" min="0" max="99" />
        </Col>
        <Col>
          <Form.Control type="number" placeholder="mm" min="0" max="59" />
        </Col>
        <Col>
          <Form.Control type="number" placeholder="ss" min="0" max="59" />
        </Col>
      </Row>
    </Form.Group>

    <Form.Select aria-label="Floating label select">
      <option>Dish type</option>
      <option value="pizza">pizza</option>
      <option value="soup">soup</option>
      <option value="sandwich">sandwich</option>
    </Form.Select>
  </Form>
);
