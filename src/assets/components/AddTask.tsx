import React, { useState } from "react";

interface AddTaskProps {
  onAdd: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default AddTask;
