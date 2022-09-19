import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { todosListContext } from "../contexts/TodoProvider.jsx";

export default function Search() {
  const [search, setSearch] = useState({ todo: "" });

  const { setTodosList } = useContext(todosListContext);

  useEffect(() => {
    submitSearch();
  }, [search]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearch((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitSearch = async () => {
    try {
      console.log(search);
      const newTodo = await axios.get(`/api/todos/search/`, {
        params: search,
      });
      setTodosList(newTodo.data);
    } catch (err) {
      console.log(err);
    }
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
                  value={search.todo}
                  onChange={handleChange}
                  type="text"
                  placeholder="Search Todo"
                  className="mb-3"
                />
              </Form.Group>
            </Col>
            <Col sm={1}>
              <Button
                className="rounded-0"
                onClick={() => {
                  setSearch({ todo: "" });
                }}
                variant="outline-primary"
              >
                CLEAR
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
