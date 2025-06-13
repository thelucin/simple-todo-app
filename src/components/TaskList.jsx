import { TaskItem } from "./TaskItem";
import { ContextMenu } from "./ContextMenu";

export const TaskList = ({ tasks, onTaskToggle, onTaskDelete }) => {
  const menuItems = [
    {
      label: "Delete task",
      action: (taskId) => {
        onTaskDelete(taskId);
      },
    },
  ];

  return (
    <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ContextMenu
            key={`ctx-${task.id}`}
            items={menuItems}
            taskId={task.id}
          >
            <TaskItem
              key={task.id}
              completed={task.completed}
              text={task.text}
              time={task.time}
              onToggle={() => onTaskToggle(task.id)}
            />
          </ContextMenu>
        ))
      ) : (
        <p className="text-secondary italic">There are no tasks yet</p>
      )}
    </div>
  );
};
