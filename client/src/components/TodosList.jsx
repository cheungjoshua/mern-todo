import React, { useContext } from "react";
import TodosListItem from "./TodosListItem";
import { Container } from "react-bootstrap";
import { todosListContext } from "../contexts/TodoProvider.jsx";

export default function TodosList() {
  const { todosList, setTodosList } = useContext(todosListContext);

  const todos = todosList.map((item) => {
    return (
      <TodosListItem key={item._id} data={item} setTodosList={setTodosList} />
    );
  });

  return (
    <>
      <div className="todo-display__container">
        <Container> {todos} </Container>
      </div>
    </>
  );
}
