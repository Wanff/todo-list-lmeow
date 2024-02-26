import React from 'react';

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
