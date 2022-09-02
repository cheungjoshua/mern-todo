import React from "react";

export default function TodosListItem({ todo, setTodosList }) {
  const date = new Date(todo.date);
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: false,
    timeZone: "PST",
  });
  console.log(time);
  return <div>{todo.todo}</div>;
}
