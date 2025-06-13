import { Calendar } from "./components/Calendar";
import { TaskList } from "./components/TaskList";
import { useEffect, useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";

export const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState({});

  const generateDefaultTasks = () => {
    return [
      {
        id: 1,
        completed: false,
        text: "Meeting with team",
        time: "10:00 AM",
      },
      {
        id: 2,
        completed: false,
        text: "Lunch break",
        time: "12:30 PM",
      },
    ];
  };

  useEffect(() => {
    const dateKey = currentDate.toDateString();
    if (!tasks[dateKey]) {
      setTasks((prev) => ({
        ...prev,
        [dateKey]: generateDefaultTasks(currentDate),
      }));
    }
  }, [currentDate, tasks]);

  const handleTaskToggle = (taskId) => {
    const dateKey = currentDate.toDateString();
    setTasks((prev) => ({
      ...prev,
      [dateKey]: prev[dateKey].map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  const handleAddTask = (text) => {
    const dateKey = currentDate.toDateString();
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setTasks((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), newTask],
    }));
  };

  return (
    <div className="w-full min-w-[1280px] h-[720px] flex relative items-center justify-center gap-2.5 p-2.5 bg-bg">
      <div className="inline-flex flex-col items-start gap-[15px] p-5 relative flex-[0_0_auto]">
        <Calendar selectedDate={currentDate} onDateChange={setCurrentDate} />
        <div className="relative w-fit font-inter text-primary text-xs tracking-normal whitespace-nowrap">
          {tasks[currentDate.toDateString()]?.length || 0} Tasks
        </div>
        <TaskList
          tasks={tasks[currentDate.toDateString()] || []}
          onTaskToggle={handleTaskToggle}
        />
        <AddTaskForm onAdd={handleAddTask} />
      </div>
    </div>
  );
};
