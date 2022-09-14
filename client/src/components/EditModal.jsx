import React, { useState, useContext } from "react";
import axios from "axios";
import { Modal, Button, Form, Col, Row, Container } from "react-bootstrap";
import { todosListContext } from "../contexts/TodoProvider.jsx";

export default function EditModal({ show, onHide, oldTodo, _id }) {
  const { setTodosList } = useContext(todosListContext);

  const [editTodo, setEditTodo] = useState({ todo: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTodo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitEditTodo = async () => {
    if (editTodo.todo !== "") {
      try {
        const newTodo = await axios.patch(`/api/todos/${_id}`, editTodo);
        setTodosList(newTodo.data);
        onHide();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container>
            <Row>
              <Form.Group>
                <Form.Control
                  name="todo"
                  value={editTodo.todo}
                  onChange={handleChange}
                  type="text"
                  placeholder={oldTodo}
                ></Form.Control>
              </Form.Group>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Container>
          <Row>
            <Col>
              <Button onClick={onHide} variant="outline-secondary">
                Cancel
              </Button>
            </Col>
            <Col>
              <Button onClick={submitEditTodo} variant="outline-success">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
}
