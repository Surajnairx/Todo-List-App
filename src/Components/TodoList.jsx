/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;

  return (
    <div>
      <ul>
        {todos.map((data, dataIndex) => (
          <TodoCard key={dataIndex} todos={data}></TodoCard>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
