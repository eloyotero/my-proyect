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
    <li className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center gap-2">
        {}
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <span className={completed ? "line-through text-gray-500" : ""}>
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700"
      >
        ✖
      </button>
    </li>
  );
};

export default TaskItem;
