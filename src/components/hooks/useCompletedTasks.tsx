import { useEffect, useState } from "react";
import { Task } from "../../interfaces";

interface Props {
  tasks: Task[];
  done: boolean;
}

const useCompletedTasks = (props: Props): Task[] => {
  const [tasksDone, setTasksDone] = useState<Task[]>([]);

  useEffect(() => {
    const filteredTasks: Task[] = props.tasks.filter((task: Task) => {
      if (props.done) {
        return task.completed;
      } else {
        return !task.completed;
      }
    });
    setTasksDone(filteredTasks);
  }, [props.tasks, props.done]);

  return tasksDone;
};

export default useCompletedTasks;
