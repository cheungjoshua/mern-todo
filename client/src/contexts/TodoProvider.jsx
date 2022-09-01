import React, { useState, useEffect, createContext } from "react";
import { fetchTodos } from "../helper/fetchTodos";

export const todosListContext = createContext();

export default function TodoProvider({ children }) {
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchTodos();
      setTodosList(data);
    })();
  }, []);

  const providerData = { todosList, setTodosList };

  return (
    <todosListContext.Provider value={providerData}>
      {children}
    </todosListContext.Provider>
  );
}
