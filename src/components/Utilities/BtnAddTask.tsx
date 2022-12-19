import React from "react";

const BtnAddTask: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <button
      className={`bg-violet-600 hover:bg-violet-700 py-3 px-6 text-slate-50 rounded-lg w-auto transition ${className}`}
    >
      Add new task
    </button>
  );
};

export default BtnAddTask;
