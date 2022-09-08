import axios from "axios";
import React from "react";
import { Button, Row, Col } from "react-bootstrap";

export default function TodosListItem({ data, setTodosList }) {
  const { _id, completed, todo, date } = data;

  let complete = completed ? "Undo" : "Done";

  const removeTodo = async () => {
    try {
      // console.log(_id);
      const newList = await axios.delete(`/api/todos/${_id}`);
      setTodosList(newList.data);
      console.log(newList);
    } catch (err) {
      console.log(err);
    }
  };

  // const date = new Date(todo.date);
  // const year = date.getFullYear();
  // const time = date.toLocaleTimeString("en", {
  //   timeStyle: "short",
  //   hour12: false,
  //   timeZone: "PST",
  // });
  // console.log(data);
  return (
    <>
      <Row className="justify-content-around">
        <Col sm={1}>
          <Button>{complete}</Button>
        </Col>
        <Col sm={2}>
          <div>{todo}</div>
        </Col>
        <Col sm={1}>
          <Button>EDIT</Button>
        </Col>
        <Col sm={1}>
          <Button onClick={removeTodo}>REMOVE</Button>
        </Col>
      </Row>
    </>
  );
}
