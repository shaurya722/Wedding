import * as React from "react";

interface SelectFieldProps {
  label: string;
  placeholder: string;
}

function SelectField({ label, placeholder }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium text-zinc-800">{label}</label>
      <div className="flex justify-between items-center px-4 py-2.5 w-full rounded-lg border border-gray-200 h-[50px]">
        <div className="text-sm text-zinc-500">{placeholder}</div>
        <div dangerouslySetInnerHTML={{
          __html:
            "<svg id=\"6630:19848\" layer-name=\"Chevron down\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[20px] h-[20px]\"> <path d=\"M16.25 6.875L10 13.125L3.75 6.875\" stroke=\"#8A8A8E\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
        }} />
      </div>
    </div>
  );
}

export default SelectField;
