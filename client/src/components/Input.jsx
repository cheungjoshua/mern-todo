import axios from "axios";
import React, { useState, useContext } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { todosListContext } from "../contexts/TodoProvider.jsx";

export default function Input() {
  const [post, setPost] = useState({
    todo: "",
  });

  const { todosList, setTodosList } = useContext(todosListContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitPost = async () => {
    try {
      const postedTodo = await axios.post("/api/todos", post);
      setTodosList([...todosList, postedTodo.data]);
    } catch (err) {
      console.log(err);
    }
    setPost({
      todo: "",
    });
  };

  return (
    <>
      <Form>
        <Container>
          <Row>
            <Col sm={10}>
              <Form.Group>
                <Form.Control
                  name="todo"
                  value={post.todo}
                  onChange={handleChange}
                  placeholder="TODO"
                  className="mb-3"
                />
                {/* <Form.Control
    name="description"
    value={post.description}
    onChange={handleChange}
    placeholder="Description"
    className="mb-3"
  /> */}
              </Form.Group>
            </Col>
            <Col sm={1}>
              <Button onClick={submitPost}>Create</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
