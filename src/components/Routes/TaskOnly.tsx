import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TaskOnly: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const tasks = useAppSelector((state) => state.tasks.tasks);

  const [matchedTask, setMatchedTask] = useState<Task[]>([]);

  useEffect(() => {
    const taskId = params.taskId;
    const filteredTask = tasks.filter((task: Task) => taskId === task.id);
    if (!filteredTask.length) {
      navigate("/");
    }
    setMatchedTask(filteredTask);
  }, [navigate, params.taskId, tasks]);

  return (
    <LayoutRoutes title={`"${matchedTask[0].title}"`} tasks={matchedTask} />
  );
};

export default TaskOnly;
