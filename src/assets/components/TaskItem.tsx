import React from "react";

interface TaskItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <li className="flex items-center justify-between p-3 mb-2 bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="w-5 h-5 accent-green-500"
        />
        <span
          className={`text-lg ${
            completed ? "line-through text-gray-400" : "text-gray-100"
          }`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-400 hover:text-red-600 text-xl font-bold transition-colors duration-200"
      >
        ✖
      </button>
    </li>
  );
};

export default TaskItem;
