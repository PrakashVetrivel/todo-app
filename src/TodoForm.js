import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ name: '', description: '', status: 'Not Completed' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...todo, id: Date.now() });
    setTodo({ name: '', description: '', status: 'Not Completed' });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Name"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        required
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default TodoForm;
