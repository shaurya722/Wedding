import * as React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center px-40 w-full bg-white border border-zinc-200 h-[60px] max-md:px-10 max-sm:px-5">
      <h1 className="text-2xl font-bold tracking-tighter text-gray-400">
        Perfect Wedding Planner
      </h1>
      <nav className="flex gap-10 items-center max-sm:hidden">
        <a href="#" className="text-base font-bold leading-6 text-neutral-900">
          Home
        </a>
        <a href="#" className="text-base leading-6 text-neutral-900">
          Checklist
        </a>
        <a href="#" className="text-base leading-6 text-neutral-900">
          Guests
        </a>
        <a href="#" className="text-base leading-6 text-neutral-900">
          Budget
        </a>
        <a href="#" className="text-base leading-6 text-neutral-900">
          Supplier
        </a>
      </nav>
      <img
        src="https://placehold.co/40x40/7DA89B/7DA89B"
        alt="User profile"
        className="w-[40px] h-[40px] rounded-[40px]"
      />
    </header>
  );
}

export default Header;
