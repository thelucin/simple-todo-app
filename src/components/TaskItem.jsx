export const TaskItem = ({ completed, text, time }) => {
  return (
    <div className="flex items-center gap-1 p-1 relative self-stretch w-full flex-[0_0_auto]">
      <input
        type="checkbox"
        checked={completed}
        className="relative w-4 h-4 rounded-sm border border-secondary checked:bg-accent checked:border-accent focus:ring-accent focus:ring-offset-0 focus:ring-1"
        onChange={() => {}}
      />
      <div
        className={`relative w-fit mt-[-1.00px] font-inter ${completed ? "line-through text-secondary" : "text-primary"} text-sm tracking-normal`}
      >
        {text}
      </div>
      <div className="relative flex-1 self-stretch grow" />
      <div className="relative w-fit font-inter text-secondary text-xs tracking-normal whitespace-nowrap">
        {time}
      </div>
    </div>
  );
};
