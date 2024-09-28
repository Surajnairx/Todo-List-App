/* eslint-disable react/prop-types */
const TodoCard = (props) => {
  const { todos, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className=" bg-white p-2 rounded-lg m-2 flex justify-center gap-3 items-baseline">
      {todos}
      <button onClick={() => handleEditTodo(index)}>
        <i className="fa-solid fa-pen-to-square p-2"></i>
      </button>

      <button>
        <i
          className="fa-solid fa-trash-can p-2"
          onClick={() => handleDeleteTodo(index)}
        ></i>
      </button>
    </li>
  );
};

export default TodoCard;
