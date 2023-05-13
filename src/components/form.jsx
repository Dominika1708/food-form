import { Pizza } from "./forPizza";
import { Soup } from "./forSoup";
import { Sandwich } from "./forSandwich";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button, Col, Collapse, Row } from "react-bootstrap";
import { useState } from "react";

export const FoodForm = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [dish, setDish] = useState("");

  const addInputs = (param) => {
    switch (param) {
      case "pizza":
        return <Pizza />;

      case "soup":
        return <Soup />;

      case "sandwich":
        return <Sandwich />;

      default:
        return null;
    }
  };

  const handleTransition = (e) => {
    let time = 100;
    if (open) {
      setOpen(false);
      time = 600;
    }
    setTimeout(() => {
      setDish(e.target.value);
      setOpen(true);
    }, time);
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <FloatingLabel controlId="floatingInput" label="Dish name">
          <Form.Control type="text" placeholder="example" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column>Preparation time:</Form.Label>
        <Col>
          <Form.Control type="number" placeholder="hh" min="0" max="99" />
        </Col>
        <Col>
          <Form.Control type="number" placeholder="mm" min="0" max="59" />
        </Col>
        <Col>
          <Form.Control type="number" placeholder="ss" min="0" max="59" />
        </Col>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select
          onChange={handleTransition}
          aria-label="Floating label select"
        >
          <option>Dish type</option>
          <option value="pizza">pizza</option>
          <option value="soup">soup</option>
          <option value="sandwich">sandwich</option>
        </Form.Select>
      </Form.Group>

      <br />
      <Collapse in={open}>
        <div>{addInputs(dish)}</div>
      </Collapse>
      <br />

      <Button
        variant="outline-primary"
        size="lg"
        type="submit"
        disabled={false}
      >
        Submit
      </Button>
    </Form>
  );
};
