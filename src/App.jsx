import { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
