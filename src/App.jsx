import { Calendar } from "./components/Calendar";
import { TaskList } from "./components/TaskList";

export const App = () => {
  return (
    <div className="w-full min-w-[1280px] h-[720px] flex relative items-center justify-center gap-2.5 p-2.5 bg-bg">
      <div className="inline-flex flex-col items-start gap-[15px] p-5 relative flex-[0_0_auto]">
        <Calendar />
        <div className="relative w-fit font-inter text-primary text-xs tracking-normal whitespace-nowrap">
          3 Tasks
        </div>
        <TaskList />
      </div>
    </div>
  );
};
