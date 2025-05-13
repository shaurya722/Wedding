"use client";
import React from "react";
import { SmallChevronDownIcon } from "./Icons";



export const FormSelect = ({
  label,
  value,
  // onChange,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-base text-zinc-800">{label}</label>
      <div className="flex justify-between items-center px-4 py-2.5 w-full rounded-lg border border-gray-200 h-[50px]">
        <div className="text-sm text-zinc-500">{value}</div>
        <SmallChevronDownIcon />
      </div>
    </div>
  );
};
