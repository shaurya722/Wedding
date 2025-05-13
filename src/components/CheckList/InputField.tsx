import * as React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: string;
}

function InputField({ label, placeholder, type }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium text-zinc-800">{label}</label>
      <div className="flex items-center px-4 py-2.5 w-full rounded-lg border border-gray-200 h-[50px]">
        <input
          type={type}
          placeholder={placeholder}
          className="flex-1 text-sm text-zinc-500 outline-none"
        />
      </div>
    </div>
  );
}

export default InputField;
