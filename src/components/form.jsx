import { Pizza } from "./forPizza";
import { Soup } from "./forSoup";
import { Sandwich } from "./forSandwich";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Col, Collapse, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";

export const FoodForm = ({ onSubmit, children }) => {
  const [open, setOpen] = useState(false);
  const [dish, setDish] = useState("");

  const handleNumValue = (e) => {
    if (e.target.value < 10) {
      return (e.target.value = "0" + e.target.value);
    }
  };

  const addInputs = (param) => {
    switch (param) {
      case "pizza":
        return <Pizza changeNum={handleNumValue} />;

      case "soup":
        return <Soup />;

      case "sandwich":
        return <Sandwich changeNum={handleNumValue} />;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const preparation_time =
      form.elements.hrs.value +
      ":" +
      form.elements.min.value +
      ":" +
      form.elements.sec.value;
    const type = form.elements.type.value;

    if (type === "pizza") {
      const no_of_slices = form.elements.no_of_slices.value;
      const diameter = form.elements.diameter.value;

      onSubmit({
        name,
        preparation_time,
        type,
        no_of_slices,
        diameter,
      });
    }
    if (type === "soup") {
      const spiciness_scale = form.elements.spiciness_scale.value;

      onSubmit({
        name,
        preparation_time,
        type,
        spiciness_scale,
      });
    }
    if (type === "sandwich") {
      const slices_of_bread = form.elements.slices_of_bread.value;

      onSubmit({
        name,
        preparation_time,
        type,
        slices_of_bread,
      });
    }
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <FloatingLabel className="dish-name" label="Dish name">
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="example"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Row} className="mb-4">
        <Form.Label column>Preparation time:</Form.Label>
        <Col>
          <InputGroup>
            <InputGroup.Text>hrs</InputGroup.Text>
            <Form.Control
              name="hrs"
              required
              type="number"
              defaultValue="00"
              min="0"
              max="99"
              onChange={handleNumValue}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup>
            <InputGroup.Text>min</InputGroup.Text>
            <Form.Control
              name="min"
              required
              type="number"
              defaultValue="00"
              min="0"
              max="59"
              onChange={handleNumValue}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup>
            <InputGroup.Text>sec</InputGroup.Text>
            <Form.Control
              name="sec"
              required
              type="number"
              defaultValue="00"
              min="0"
              max="59"
              onChange={handleNumValue}
            />
          </InputGroup>
        </Col>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select
          name="type"
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
      {children}
    </Form>
  );
};
