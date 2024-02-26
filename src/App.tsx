import { useState } from 'react';
import Todo from './components/Todo'; 
import Modal from './components/Modal'; 

interface TodoItem {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo: TodoItem = { id: Date.now(), text: inputValue.trim() };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const removeTask = (id: number) => {
    setTodos(todos.filter(task => task.id !== id));
  };

  return (
    <>
      <h1>Todo List!!! :3</h1>
      <ul>
        {todos.map((task) => (
          <Todo key={task.id} task={task.text} onRemove={() => removeTask(task.id)} />
        ))}
      </ul>

      <form onSubmit={addTask}>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit" >Create Task</button>
      </form>

      <Modal />
    </>
    
  );
  
}

export default App;

