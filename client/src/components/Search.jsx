import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Search() {
  const [search, setSearch] = useState({ todo: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitSearch = () => {
    console.log(search);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Control
                      name="todo"
                      value={search.todo}
                      onChange={handleChange}
                      type="text"
                      placeholder="Search Todo"
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Button onClick={submitSearch}>Search</Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Switch></Form.Switch>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
