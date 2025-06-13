export const TaskItem = ({ completed, text, time, onToggle }) => {
  return (
    <div
      className="flex items-center gap-1 p-1 relative self-stretch w-full flex-[0_0_auto] hover:bg-gray-100 rounded transition-colors cursor-pointer"
      onClick={onToggle}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="relative w-4 h-4 rounded-sm border border-secondary checked:bg-accent checked:border-accent focus:ring-accent focus:ring-offset-0 focus:ring-1 cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      />
      <div
        className={`relative w-fit mt-[-1.00px] font-inter ${completed ? "line-through text-secondary" : "text-primary"} text-sm tracking-normal flex-1`}
      >
        {text}
      </div>
      <div className="relative w-fit font-inter text-secondary text-xs tracking-normal whitespace-nowrap">
        {time}
      </div>
    </div>
  );
};
