"use client";
import React from "react";
import { ChevronDownIcon } from "./Icons";
import { FormInput } from "./FormInput";

export const GiftDetailsForm = () => {
  return (
    <section className="p-8 mt-5 bg-white rounded-2xl border border-stone-300 max-sm:p-5">
      <header className="flex justify-between items-center pb-5 border-b border-stone-300">
        <h2 className="text-xl text-zinc-800">Gift</h2>
        <button aria-label="Toggle section">
          <ChevronDownIcon />
        </button>
      </header>

      <div className="grid grid-cols-3 gap-8 pt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        <FormInput label="Gift Description" value="Flower Bouquet" />
        <FormInput label="Value" placeholder="Enter Value" />
        <div className="flex flex-col gap-1.5">
          <label className="text-base text-zinc-800">Add Attachment</label>
          <div className="w-full rounded-lg border-gray-200 border-[dashedpx] h-[50px]" />
        </div>
      </div>
    </section>
  );
};
