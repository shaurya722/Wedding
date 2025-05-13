"use client";
import * as React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import ToggleButtonGroup from "./ToggleButtonGroup";
import AttachmentButton from "./AttachmentButton";
import SubmitButton from "./SubmitButton";

function TaskForm() {
  const [expanded, setExpanded] = React.useState(true);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <form>
      <div className="flex overflow-hidden justify-between items-center p-4 rounded-xl border border-stone-300">
        <h2 className="text-xl font-medium text-center text-zinc-800">
          Add New Task
        </h2>
        <button
          type="button"
          onClick={toggleExpand}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse form" : "Expand form"}
        >
          <div dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"6673:1165\" layer-name=\"Iconset/chevron-down\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[24px] h-[24px]\"> <path d=\"M6 9L12 15L18 9\" stroke=\"#181818\" stroke-width=\"2\" stroke-linecap=\"round\"></path> </svg>",
          }} />
        </button>
      </div>

      {expanded && (
        <>
          <div className="grid grid-cols-2 gap-8 mt-6 max-sm:grid-cols-1">
            <InputField
              label="Task Tittle"
              placeholder="Task Tittle"
              type="text"
            />
            <SelectField
              label="Category"
              placeholder="Select Category"
            />
          </div>

          <div className="flex gap-8 mt-6 max-sm:flex-col">
            <div className="flex-1">
              <ToggleButtonGroup
                options={["To Do", "In Progress", "Done"]}
                defaultSelected="To Do"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-6 max-sm:grid-cols-1">
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-zinc-800">Due Date</label>
              <div className="px-4 py-2.5 w-full text-sm rounded-lg border border-gray-200 h-[50px] text-zinc-500">
                Select Date
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <ToggleButtonGroup
                options={["Low", "Medium", "High"]}
                defaultSelected="Low"
                withIcon={true}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-6 max-sm:grid-cols-1">
            <SelectField
              label="Assign The Task"
              placeholder="20"
            />
            <InputField
              label="Notes"
              placeholder="20"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-6 mt-6">
            <AttachmentButton />
          </div>

          <div className="flex justify-end mt-8">
            <SubmitButton />
          </div>
        </>
      )}
    </form>
  );
}

export default TaskForm;
