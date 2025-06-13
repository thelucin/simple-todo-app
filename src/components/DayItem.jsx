export const DayItem = ({ day, date, isActive = false, onClick }) => {
  return (
    <div
      className="flex-col gap-[5px] p-[5px] inline-flex items-center justify-center relative flex-[0_0_auto] cursor-pointer hover:bg-gray-100 rounded transition-colors"
      onClick={onClick}
    >
      <div
        className={`relative w-fit mt-[-1.00px] ${isActive ? "font-bold" : "font-normal"} ${isActive ? "text-primary" : "text-secondary"} text-xs tracking-normal whitespace-nowrap`}
      >
        {day}
      </div>
      <div
        className={`${isActive ? "font-bold" : "font-normal"} ${isActive ? "text-primary" : "text-secondary"} relative w-fit text-xs tracking-normal whitespace-nowrap`}
      >
        {date}
      </div>
      <div
        className={`relative w-5 h-0.5 ${isActive ? "bg-accent" : "bg-bg"} rounded-sm`}
      />
    </div>
  );
};
