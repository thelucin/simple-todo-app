import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const tasks = [
    {
      completed: true,
      text: "Meeting with Anna",
      time: "6:30 PM",
    },
    {
      completed: false,
      text: "Meeting with Anna",
      time: "6:29 PM",
    },
    {
      completed: true,
      text: "Meeting with Anna",
      time: "6:28 PM",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          completed={task.completed}
          text={task.text}
          time={task.time}
        />
      ))}
    </div>
  );
};
