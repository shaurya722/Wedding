import * as React from "react";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import TaskForm from "./TaskForm";

function WeddingPlannerTaskInput() {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      <Breadcrumb />
      <section className="p-8 mx-40 bg-white rounded-2xl border border-stone-300 max-md:mx-10 max-sm:mx-5">
        <TaskForm />
      </section>
    </main>
  );
}

export default WeddingPlannerTaskInput;
