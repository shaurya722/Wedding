"use client";
import React from "react";
import { ChevronDownIcon, PlusCircleIcon } from "./Icons";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";

export const OtherDetailsForm = () => {
  return (
    <section className="p-8 mt-5 bg-white rounded-2xl border border-stone-300 max-sm:p-5">
      <header className="flex justify-between items-center pb-5 border-b border-stone-300">
        <h2 className="text-xl text-zinc-800">Others</h2>
        <button aria-label="Toggle section">
          <ChevronDownIcon />
        </button>
      </header>

      <div className="grid grid-cols-2 gap-8 pt-5 max-sm:grid-cols-1">
        <FormSelect label="Relationship" value="Friend" />
        <FormInput label="Address" value="234, Ferman" />
      </div>

      <div className="grid grid-cols-2 gap-8 mt-5 max-sm:grid-cols-1">
        <FormInput label="Notes" placeholder="" />
        <FormSelect label="Accommodation" value="Friend" />
      </div>

      <button className="flex gap-2 justify-center items-center px-4 py-2.5 mt-5 w-full rounded-lg border-indigo-300 border-[dashedpx] h-[50px]">
        <PlusCircleIcon />
        <span className="text-base text-slate-500">Add New Field</span>
      </button>
    </section>
  );
};
