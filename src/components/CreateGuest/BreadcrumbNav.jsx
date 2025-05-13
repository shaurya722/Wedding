"use client";
import React from "react";
import { ChevronIcon } from "./Icons";

export const BreadcrumbNav = () => {
  return (
    <nav className="flex gap-2.5 items-center mb-5">
      <a href="#" className="text-base text-zinc-500">
        Home
      </a>
      <ChevronIcon />
      <span className="text-base font-bold text-neutral-900">Guestlist</span>
    </nav>
  );
};
