import { useState } from "react";
import { PaperPlaneRightIcon } from "@phosphor-icons/react";
import { Space } from "./Space";

export const AddTaskForm = ({ onAdd }) => {
  const [taskText, setTaskText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAdd(taskText.trim());
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex items-center justify-center px-2.5 py-[5px] relative rounded-[15px] overflow-hidden border border-solid ${
          isFocused ? "border-accent" : "border-secondary"
        }`}
      >
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Add new item..."
          className="w-full bg-transparent outline-none font-primary text-primary text-xs placeholder:text-secondary"
        />

        <Space />

        <button
          type="submit"
          disabled={!taskText.trim()}
          className={`disabled:opacity-30 disabled:cursor-not-allowed transition-colors ${
            isFocused || isButtonHovered ? "text-primary" : "text-secondary"
          }`}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <PaperPlaneRightIcon size={14} className="text-primary" />
        </button>
      </div>
    </form>
  );
};
