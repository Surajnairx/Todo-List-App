/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodos } = props;

  const [todoValue, setTodoValue] = useState("");

  return (
    <div className=" flex justify-center my-5 ">
      <input
        className=" font-Bots border-4 rounded-lg  mx-2 flex-1 px-3 "
        type="text"
        value={todoValue}
        placeholder="Enter your todo.."
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        className=" border-4 bg-[white] rounded-lg px-3 py-2 mx-3 "
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
