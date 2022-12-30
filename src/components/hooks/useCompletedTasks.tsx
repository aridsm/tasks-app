import { useEffect, useState } from "react";
import { Task } from "../../interfaces";

interface Props {
  tasks: Task[];
  done: boolean;
}

const useCompletedTasks = (props: Props): { tasks: Task[] } => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const filteredTasks: Task[] = props.tasks.filter((task: Task) => {
      if (props.done) {
        return task.completed;
      } else {
        return !task.completed;
      }
    });
    setTasks(filteredTasks);
  }, [props.tasks, props.done]);

  return { tasks };
};

export default useCompletedTasks;
