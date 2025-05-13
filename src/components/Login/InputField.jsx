import React from "react";


export const InputField = ({
  type,
  placeholder,
  leftIcon = null,
  rightIcon = null,
  label = null,
}) => {
  return (
    <div>
      {label && (
        <label className="block mb-1 text-sm text-gray-700">{label}</label>
      )}
      <div className="flex gap-3 items-center px-4 py-1.5 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors duration-200">
        {leftIcon && <div>{leftIcon}</div>}
        <input
          type={type}
          placeholder={placeholder}
          className="flex-1 text-base text-zinc-500 outline-none bg-transparent h-[30px]"
        />
        {rightIcon && <div>{rightIcon}</div>}
      </div>
    </div>
  );
};
