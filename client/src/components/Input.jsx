import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

export default function Input() {
  const [post, setPost] = useState({
    todo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitPost = () => {
    console.log(post);
    setPost({
      todo: "",
    });
  };

  return (
    <>
      <Form>
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
      </Form>
    </>
  );
}
