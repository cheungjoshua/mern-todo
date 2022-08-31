import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Row, Col } from "react-bootstrap";

function App() {
  const [post, setPost] = useState({
    todo: "",
  });
  const [todosList, setTodoList] = useState([]);

  useEffect(() => {
    fetchTodos();
    console.log(todosList);
  }, []);

  const fetchTodos = async () => {
    try {
      const todosList = await axios.get("/api/todos");
      setTodoList(todosList.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="App">
      <Row>
        <nav className="d-flex flex-column justify-content-center align-items-center">
          <h1>Todo app</h1>
        </nav>
      </Row>
      <Row>
        <div className="form__container d-flex flex-column justify-content-center align-items-center">
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
                <Button onClick={() => {}}>Create</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Row>
      <Row>
        <div className="todo-display__container"></div>
      </Row>
    </div>
  );
}

export default App;
