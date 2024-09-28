/* eslint-disable react/prop-types */
const TodoCard = (props) => {
  return (
    <li className=" bg-white p-2 rounded-lg m-2 flex justify-center gap-3 items-baseline">
      {props.todos}
      <i className="fa-solid fa-pen-to-square p-2"></i>
      <i className="fa-solid fa-trash-can p-2"></i>
    </li>
  );
};

export default TodoCard;
