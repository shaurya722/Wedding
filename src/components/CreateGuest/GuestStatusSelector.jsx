"use client";
import React, { useState } from "react";

export const GuestStatusSelector = () => {
  const [selectedStatus, setSelectedStatus] = useState("To Invited");

  const statuses = [
    { label: "To Invited", color: "text-neutral-900", active: "bg-indigo-100 text-indigo-700" },
    { label: "Invited", color: "text-neutral-900", active: "bg-indigo-100 text-indigo-700" },
    { label: "Attending", color: "text-neutral-900", active: "bg-green-100 text-green-700" },
    { label: "Declined", color: "text-neutral-900", active: "bg-red-100 text-red-700" },
  ];

  return (
    <div className="flex gap-5 mt-5">
    <div className="flex flex-1 justify-between p-0.5 bg-white rounded-lg border border-gray-200">
      {statuses.map((status) => (
        <button
          key={status.label}
          className={`flex-1 py-2.5 text-base text-center rounded-xl transition-colors duration-200
            ${selectedStatus === status.label ? status.active : status.color}
          `}
          onClick={() => setSelectedStatus(status.label)}
          type="button"
        >
          {status.label}
        </button>
      ))}
    </div>
  </div>
  );
};
