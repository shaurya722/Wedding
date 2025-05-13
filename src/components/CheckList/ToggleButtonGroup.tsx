"use client";
import * as React from "react";

interface ToggleButtonGroupProps {
  options: string[];
  defaultSelected: string;
  withIcon?: boolean;
}

function ToggleButtonGroup({ options, defaultSelected, withIcon = false }: ToggleButtonGroupProps) {
  const [selected, setSelected] = React.useState(defaultSelected);

  return (
    <div className="flex overflow-hidden w-full bg-white rounded-lg border border-gray-200 h-[50px]">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setSelected(option)}
          className={`flex-1 text-base ${
            selected === option
              ? "text-gray-500 bg-gray-400 bg-opacity-20"
              : "text-neutral-900 border border-gray-200"
          } ${index > 0 ? "border-l-0" : ""}`}
        >
          <div className="flex gap-2 justify-center items-center">
            <span>{option}</span>
            {withIcon && option === "High" && (
              <div dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"6630:19863\" layer-name=\"urgent\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[20px] h-[20px]\"> <path d=\"M17.9844 12.7344C18.0578 12.8261 18.1039 12.9366 18.1174 13.0533C18.1308 13.1699 18.1112 13.288 18.0606 13.3941C18.0101 13.5001 17.9307 13.5897 17.8315 13.6526C17.7323 13.7156 17.6175 13.7493 17.5 13.75H3.75V16.875C3.75 17.0408 3.68415 17.1997 3.56694 17.3169C3.44973 17.4342 3.29076 17.5 3.125 17.5C2.95924 17.5 2.80027 17.4342 2.68306 17.3169C2.56585 17.1997 2.5 17.0408 2.5 16.875V3.75C2.5 3.58424 2.56585 3.42527 2.68306 3.30806C2.80027 3.19085 2.95924 3.125 3.125 3.125H17.5C17.6175 3.12566 17.7323 3.1594 17.8315 3.22236C17.9307 3.28531 18.0101 3.37493 18.0606 3.48094C18.1112 3.58696 18.1308 3.70507 18.1174 3.82175C18.1039 3.93842 18.0578 4.04894 17.9844 4.14062L14.5469 8.4375L17.9844 12.7344Z\" fill=\"#7DA89B\"></path> </svg>",
              }} />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

export default ToggleButtonGroup;
