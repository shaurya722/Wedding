"use client";
import React from "react";
import { XCircleIcon, PlusCircleIcon } from "./Icons";

export const TagSelector = () => {
  return (
    <div className="mt-5">
      <label className="mb-1.5 text-sm text-zinc-700">Tags</label>
      <div className="flex flex-wrap gap-4">
        <div className="inline-flex gap-1 items-center p-2.5 rounded-3xl border border-indigo-300">
          <span className="text-sm text-slate-500">Mandatory</span>
          <button aria-label="Remove mandatory tag">
            <XCircleIcon />
          </button>
        </div>
        <div className="inline-flex gap-1 items-center p-2.5 rounded-3xl border border-indigo-300">
          <span className="text-sm text-slate-500">Optional</span>
          <button aria-label="Remove optional tag">
            <XCircleIcon />
          </button>
        </div>
        <button className="inline-flex gap-1 items-center p-2.5 rounded-3xl border-indigo-300 border-[dashedpx]">
          <span className="text-sm text-slate-500">Add Tag</span>
          <PlusCircleIcon />
        </button>
      </div>
    </div>
  );
};
