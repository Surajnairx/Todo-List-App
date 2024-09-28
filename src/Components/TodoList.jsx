/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos, handleDeleteTodo } = props;

  return (
    <div>
      <ul>
        {todos.map((data, dataIndex) => (
          <TodoCard
            {...props}
            key={dataIndex}
            index={dataIndex}
            handleDeleteTodo={handleDeleteTodo}
            todos={data}
          ></TodoCard>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
