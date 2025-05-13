"use client";
import React from "react";



export const FormInput = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-base text-zinc-800">{label}</label>
      <div className="flex items-center px-4 py-2.5 w-full rounded-lg border border-gray-200 h-[50px]">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full text-sm text-zinc-500"
        />
      </div>
    </div>
  );
};
