import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import EditModal from "./EditModal";

export default function TodosListItem({ data, setTodosList }) {
  const { _id, completed, todo, date } = data;
  const [modalShow, setModalShow] = useState(false);

  let complete = completed ? "Undo" : "Done";

  let todoColor = completed
    ? "text-center bg-secondary rounded border border-secondary text-white-50"
    : "text-center text-white bg-success rounded border border-secondary";

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
          <Form.Group>
            <Form.Check type={"checkbox"}>
              <Form.Check.Input
                type={"checkbox"}
                defaultChecked={completed}
                onClick={todoStatus}
              />
            </Form.Check>
          </Form.Group>
        </Col>

        <Col sm={5} className={todoColor} onClick={todoStatus}>
          <h3> {todo}</h3>
        </Col>
        <Col sm={1}>
          <Button
            onClick={() => {
              setModalShow(true);
            }}
            variant="outline-warning"
          >
            EDIT
          </Button>
        </Col>
        <Col sm={1}>
          <Button onClick={removeTodo} variant="outline-danger">
            REMOVE
          </Button>
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
