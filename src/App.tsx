import AccountData from "./components/AccountData";
import Menu from "./components/Menu";
import TasksSection from "./components/TasksSection/TasksSection";

const App: React.FC = () => {
  return (
    <div className="bg-slate-200 min-h-screen text-slate-600 grid grid-cols-11">
      <Menu />
      <TasksSection />
      <AccountData />
    </div>
  );
};

export default App;
