"use client";
import React from "react";
import { NavigationHeader } from "./NavigationHeader";
import { BreadcrumbNav } from "./BreadcrumbNav";
import { AddGuestForm } from "./AddGuestForm";
import { OtherDetailsForm } from "./OtherDetailsForm";
import { GiftDetailsForm } from "./GiftDetailsForm";

export const GuestManagement = () => {
  return (
    <main className="flex flex-col bg-white min-h-[screen]">
      {/* <NavigationHeader /> */}

      <div className="px-28 py-8 max-md:px-10 max-sm:px-5">
        <BreadcrumbNav />
        <AddGuestForm />
        <OtherDetailsForm />
        <GiftDetailsForm />

        <div className="flex justify-end mt-5">
          <button className="px-8 py-4 text-base text-white bg-indigo-300 rounded-2xl">
            ADD
          </button>
        </div>
      </div>
    </main>
  );
};
