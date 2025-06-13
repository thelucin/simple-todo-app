export const DayItem = ({ day, date, isActive, isToday, onClick }) => {
  return (
    <div
      className={`flex-col gap-1 p-1 inline-flex items-center justify-center relative flex-[0_0_auto] cursor-pointer rounded-lg transition-colors ${
        isActive ? "bg-accent/10" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <div
        className={`relative w-fit mt-[-1.00px] ${
          isActive
            ? "font-inter-bold text-accent"
            : isToday
              ? "font-inter-bold text-primary"
              : "font-inter text-secondary"
        } text-xs tracking-normal whitespace-nowrap`}
      >
        {day}
      </div>
      <div
        className={`relative w-fit ${
          isActive ? "text-accent" : isToday ? "text-primary" : "text-secondary"
        } text-xs font-inter`}
      >
        {date}
      </div>
      <div
        className={`relative w-5 h-0.5 rounded-sm ${
          isActive ? "bg-accent" : isToday ? "bg-accent/30" : "bg-transparent"
        }`}
      />
    </div>
  );
};
