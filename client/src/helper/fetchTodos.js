import axios from "axios";

export const fetchTodos = async () => {
  try {
    const todosList = await axios.get("/api/todos");
    return todosList.data;
  } catch (err) {
    console.log(err);
  }
};
