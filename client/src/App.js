import "./App.css";
import { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function App() {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    console.log(post);
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="App">
      <nav className="d-flex flex-column justify-content-center align-items-center">
        <h1>Todo app</h1>
      </nav>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  name="title"
                  value={post.title}
                  onChange={handleChange}
                  placeholder="Title"
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
            <Col>
              <Button onClick={() => {}}>Create</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default App;
