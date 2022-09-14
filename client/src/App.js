import "./App.css";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Input from "./components/Input";
import Search from "./components/Search";
import TodosList from "./components/TodosList";
import TodoProvider from "./contexts/TodoProvider";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Container>
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
            <div className="form__container d-flex flex-column justify-content-center align-items-center">
              <Search />
            </div>
          </Row>
          <Row>
            <TodosList />
          </Row>
        </Container>
      </TodoProvider>
    </div>
  );
}

export default App;
