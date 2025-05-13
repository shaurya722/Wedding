"use client";
import React from "react";
import { ChevronDownIcon } from "./Icons";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { GuestStatusSelector } from "./GuestStatusSelector";
import { AgeGroupSelector } from "./AgeGroupSelector";
import { TagSelector } from "./TagSelector";
import { PlusCircleIcon } from "./Icons";
import { InputField } from "../Login/InputField";

export const AddGuestForm = () => {
  return (
    <section className="p-8 bg-white rounded-2xl border border-stone-300 max-sm:p-5">
      <header className="flex justify-between items-center pb-5 border-b border-stone-300">
        <h2 className="text-xl text-zinc-800">Add New Guest</h2>
        <button aria-label="Toggle section">
          <ChevronDownIcon />
        </button>
      </header>

      <div className="grid grid-cols-2 gap-8 pt-5 max-sm:grid-cols-1">
        <InputField
         label="First Name" placeholder="Enter First Name" />
        <InputField label="Last Name" placeholder="Enter Last Name" />
      </div>

      <GuestStatusSelector />

      <div className="grid grid-cols-3 gap-8 mt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        <InputField type="number" label="Age" placeholder="Enter Age" />
        <FormSelect label="Gender" value="Male" />
        <AgeGroupSelector />
      </div>

      <div className="grid grid-cols-3 gap-8 mt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        <FormSelect label="Table" value="20" />
        <FormSelect label="Menu" value="Veg" />
        <FormSelect label="Additional Event" value="20" />
      </div>

      <TagSelector />

      <button className="inline-flex gap-2 items-center px-3 py-4 mt-5 bg-indigo-300 rounded-2xl">
        <PlusCircleIcon color="white" />
        <span className="text-base text-white">Add Companion</span>
      </button>
    </section>
  );
};
