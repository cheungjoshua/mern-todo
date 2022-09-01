import "./App.css";
import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Input from "./components/Input";
import TodoProvider from "./contexts/TodoProvider";

function App() {
  const [post, setPost] = useState({
    todo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="App">
      <TodoProvider>
        <Row>
          <nav className="d-flex flex-column justify-content-center align-items-center">
            <h1>Todo app</h1>
          </nav>
        </Row>
        <Row>
          <div className="form__container d-flex flex-column justify-content-center align-items-center">
            <Input />
          </div>
        </Row>
        <Row>
          <div className="todo-display__container"></div>
        </Row>
      </TodoProvider>
    </div>
  );
}

export default App;
