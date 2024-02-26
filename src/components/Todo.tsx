import React from 'react';
// import './Todo.css'; // Make sure the path matches your CSS file location

interface TodoProps {
  task: string;
  onRemove: () => void;
}

const Todo: React.FC<TodoProps> = ({ task, onRemove }) => {
  return (
    <li className="todo-item" onClick={onRemove}>
      {task}
    </li>
  );
};

export default Todo;
