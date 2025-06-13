import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { DayItem } from "./DayItem";
import { Space } from "./Space";

export const Calendar = ({ selectedDate, onDateChange }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();

  const getDayItems = () => {
    return Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return {
        day: days[date.getDay()],
        date: date.getDate(),
        fullDate: date,
      };
    });
  };

  return (
    <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
      <div className="relative w-fit mt-[-1.00px] font-inter text-secondary text-xs tracking-normal whitespace-nowrap">
        {selectedDate.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-inter-black text-primary text-2xl tracking-normal">
          Today
        </div>
        <Space />
        <MagnifyingGlassIcon size={18} className="relative" />
      </div>
      <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
        {getDayItems().map((dayItem) => (
          <DayItem
            key={dayItem.date}
            day={dayItem.day}
            date={dayItem.date}
            isActive={
              dayItem.fullDate.toDateString() === selectedDate.toDateString()
            }
            onClick={() => onDateChange(dayItem.fullDate)}
          />
        ))}
      </div>
    </div>
  );
};
