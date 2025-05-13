"use client";
import * as React from "react";
import { LoginHeader } from "./LoginHeader";
import { LoginForm } from "./LoginForm";
export const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-start h-full p-4">
      {/* <LoginHeader /> */}
      <section className="flex bg-white rounded-xl border border-neutral-300    shadow-sm">
        <figure className="w-[325px] max-sm:w-full">
          <img
            src='src/assets/Rectangle 240648588.png'
            alt="Wedding couple"
            className="h-[670px] rounded-l-[10px] max-sm:rounded-t-[10px] max-sm:rounded-b-[0px] max-sm:h-[300px]"
          />
        </figure>
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
