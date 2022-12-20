import React from "react";
import avatar1 from "../assets/avatar-1.jpg";

const AccountData: React.FC = () => {
  return (
    <section className="p-5 bg-slate-100 flex flex-col w-2/12 fixed top-0 right-0 h-screen">
      <span className="flex items-center mx-auto">
        <span className="font-medium">Hi, Ariane!</span>
        <img src={avatar1} alt="cat" className="w-10 rounded-full ml-4" />
      </span>
      <a
        href="/"
        className="mt-auto bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-rose-200"
      >
        Projected by Ariane Morelato
      </a>
    </section>
  );
};

export default AccountData;
