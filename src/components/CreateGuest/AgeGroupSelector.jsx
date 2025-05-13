
import React, { useState } from "react";

export const AgeGroupSelector = () => {
  const [selected, setSelected] = useState("Adult");
  const groups = ["Adult", "Child", "Baby"];

  return (
    <div className="flex gap-2.5 h-[50px] border border-slate-200 rounded-lg">
      {groups.map((group) => (
        <button
          key={group}
          type="button"
          className={`flex-1 py-3 text-base text-center rounded-xl transition-colors duration-150
            ${selected === group ? "bg-[#9CB7DF] text-[#5778A8]" : "text-neutral-900"}`}
          onClick={() => setSelected(group)}
        >
          {group}
        </button>
      ))}
    </div>
  );
};
