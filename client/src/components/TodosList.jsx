import React, { useContext } from "react";
import TodosListItem from "./TodosListItem";
import { todosListContext } from "../contexts/TodoProvider.jsx";

export default function TodosList() {
  const { todosList, setTodosList } = useContext(todosListContext);

  const todos = todosList.map((item) => {
    return <TodosListItem key={item._id} todo={item} />;
  });

  return <>{todos}</>;
}
