import React from "react";
import { Button, Row, Col } from "react-bootstrap";

export default function TodosListItem({ todo, setTodosList }) {
  const date = new Date(todo.date);
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: false,
    timeZone: "PST",
  });
  console.log(time);
  return (
    <>
      <Row className="">
        <Col sm={1}>
          <Button>DONE</Button>
        </Col>
        <Col sm={2}>
          <div>{todo.todo}</div>
        </Col>
        <Col sm={1}>
          <Button>EDIT</Button>
        </Col>
        <Col sm={1}>
          <Button>REMOVE</Button>
        </Col>
      </Row>
    </>
  );
}
