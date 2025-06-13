import { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import { DayItem } from "./DayItem";
import { Space } from "./Space";

export const Calendar = ({ selectedDate, onDateChange }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentWeekStart, setCurrentWeekStart] = useState(
    getStartOfWeek(new Date()),
  );
  const [weekDates, setWeekDates] = useState([]);
  const [focusedArrow, setFocusedArrow] = useState(null);

  function getStartOfWeek(date) {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay());
    start.setHours(0, 0, 0, 0);
    return start;
  }

  useEffect(() => {
    const dates = Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(currentWeekStart);
      date.setDate(currentWeekStart.getDate() + i);
      return date;
    });
    setWeekDates(dates);
  }, [currentWeekStart]);

  const prevWeek = () => {
    const prev = new Date(currentWeekStart);
    prev.setDate(prev.getDate() - 7);
    setCurrentWeekStart(prev);
  };

  const nextWeek = () => {
    const next = new Date(currentWeekStart);
    next.setDate(next.getDate() + 7);
    setCurrentWeekStart(next);
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] w-full">
      <div className="relative w-fit mt-[-1.00px] font-inter text-secondary text-xs tracking-normal whitespace-nowrap">
        {selectedDate.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </div>

      <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-black text-primary text-2xl tracking-normal">
          {isToday(selectedDate)
            ? "Today"
            : selectedDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
        </div>
        <Space />
        <MagnifyingGlassIcon size={18} className="relative" />
      </div>

      <div className="flex items-center justify-between w-full">
        <button
          onClick={prevWeek}
          onFocus={() => setFocusedArrow("left")}
          onBlur={() => setFocusedArrow(null)}
          onMouseEnter={() => setFocusedArrow("left")}
          onMouseLeave={() => setFocusedArrow(null)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Previous week"
        >
          <CaretLeftIcon
            size={16}
            weight="bold"
            className={
              focusedArrow === "left" ? "text-accent" : "text-secondary"
            }
          />
        </button>

        <div className="flex-1 flex justify-center">
          <div className="inline-flex items-center justify-center overflow-x-auto scrollbar-hide space-x-1">
            {weekDates.map((date) => (
              <DayItem
                key={date.getDate()}
                day={days[date.getDay()]}
                date={date.getDate()}
                isActive={date.toDateString() === selectedDate.toDateString()}
                isToday={isToday(date)}
                onClick={() => onDateChange(date)}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextWeek}
          onFocus={() => setFocusedArrow("right")}
          onBlur={() => setFocusedArrow(null)}
          onMouseEnter={() => setFocusedArrow("right")}
          onMouseLeave={() => setFocusedArrow(null)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Next week"
        >
          <CaretRightIcon
            size={16}
            weight="bold"
            className={
              focusedArrow === "right" ? "text-accent" : "text-secondary"
            }
          />
        </button>
      </div>
    </div>
  );
};
