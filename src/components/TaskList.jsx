import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, onTaskToggle }) => {
  return (
    <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          completed={task.completed}
          text={task.text}
          time={task.time}
          onToggle={() => onTaskToggle(task.id)}
        />
      ))}
    </div>
  );
};
