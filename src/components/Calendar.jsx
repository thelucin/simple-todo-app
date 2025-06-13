import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { DayItem } from "./DayItem";
import { Space } from "./Space";

export const Calendar = () => {
  return (
    <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
      <div className="relative w-fit mt-[-1.00px] text-secondary text-xs tracking-normal whitespace-nowrap">
        Thursday, June 12
      </div>

      <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] text-primary text-2xl tracking-normal font-black">
          Today
        </div>
        <Space />
        <MagnifyingGlassIcon size={18} className="relative" />
      </div>

      <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
        <DayItem day="Thu" date="12" isActive />
        <DayItem day="Fri" date="13" />
        <DayItem day="Sat" date="14" />
        <DayItem day="Sun" date="15" />
        <DayItem day="Mon" date="16" />
        <DayItem day="Tue" date="17" />
        <DayItem day="Wed" date="18" />
      </div>
    </div>
  );
};
