import axios from "axios";
import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import EditModal from "./EditModal";

export default function TodosListItem({ data, setTodosList }) {
  const { _id, completed, todo, date } = data;
  const [modalShow, setModalShow] = useState(false);

  let complete = completed ? "Undo" : "Done";

  const removeTodo = async () => {
    try {
      // console.log(_id);
      const newList = await axios.delete(`/api/todos/${_id}`);
      setTodosList(newList.data);
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

  return (
    <>
      <Row className="justify-content-around mb-2">
        <Col sm={1}>
          <Button onClick={todoStatus}>{complete}</Button>
        </Col>
        <Col sm={2}>
          <div>{todo}</div>
        </Col>
        <Col sm={1}>
          <Button
            onClick={() => {
              setModalShow(true);
            }}
          >
            EDIT
          </Button>
        </Col>
        <Col sm={1}>
          <Button onClick={removeTodo}>REMOVE</Button>
        </Col>
      </Row>
      <EditModal
        _id={_id}
        oldTodo={todo}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      ></EditModal>
    </>
  );
}
