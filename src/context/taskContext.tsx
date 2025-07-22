import React from "react";
import type { TaskContextType, ITask } from "/src/@customTypes/task";
import { v4 } from "uuid";

export const TaskContext = React.createContext<TaskContextType | null>(null);

const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = React.useState<ITask[]>([
    {
      id: "1",
      title: "post 1",
      description: "this is a description",
      tags: {
        category: "Documentation",
        status: "Done",
        priority: "Medium",
      },
    },
    {
      id: "2",
      title: "post 2",
      description: "this is a description",
      tags: {
        category: "Documentation",
        status: "Done",
        priority: "Medium",
      },
    },
  ]);

  const saveTask = (task: ITask) => {
    const newTask: ITask = {
      id: v4(),
      title: task.title,
      description: task.description,
      tags: {
        category: task.tags.category,
        status: task.tags.status,
        priority: task.tags.priority,
      },
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = () => {
    tasks.filter(() => {});
  };

  return (
    <TaskContext.Provider value={{ tasks, saveTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
