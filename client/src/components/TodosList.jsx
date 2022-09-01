import React, { useContext } from "react";
import { todosListContext } from "../contexts/TodoProvider.jsx";

export default function TodosList() {
  const { todosList, setTodosList } = useContext(todosListContext);
  console.log(typeof todosList);
  console.log(todosList);

  return <div>TodosList</div>;
}
