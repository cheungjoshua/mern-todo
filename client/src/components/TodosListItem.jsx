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

  //Edit todo completed status
  const todoStatus = async () => {
    let change = completed ? false : true;
    try {
      const newList = await axios.patch(`/api/todos/${_id}`, {
        completed: change,
      });
      setTodosList(newList.data);
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = () => {
    console.log("Edit clicked");
  };

  return (
    <>
      <Row className="justify-content-around">
        <Col sm={1}>
          <Button onClick={todoStatus}>{complete}</Button>
        </Col>
        <Col sm={2}>
          <div>{todo}</div>
        </Col>
        <Col sm={1}>
          <Button onClick={editTodo}>EDIT</Button>
        </Col>
        <Col sm={1}>
          <Button onClick={removeTodo}>REMOVE</Button>
        </Col>
      </Row>
    </>
  );
}
