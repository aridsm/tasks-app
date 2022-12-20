import React from "react";
import AccountData from "./components/AccountData";
import Menu from "./components/Menu";
import TasksSection from "./components/TasksSection/TasksSection";
import Modal from "./components/Utilities/Modal";
import { useAppSelector } from "./store/hooks";

const App: React.FC = () => {
  const isModalOpen = useAppSelector((state) => state.modal.modalIsOpen);

  return (
    <div className="bg-slate-200 min-h-screen text-slate-600">
      {isModalOpen && <Modal />}
      <Menu />
      <TasksSection />
      <AccountData />
    </div>
  );
};

export default App;
