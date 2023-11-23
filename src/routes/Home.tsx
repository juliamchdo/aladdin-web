import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { NewTask } from "../components/NewTask";
import { Card } from "../components/Card";
import { Task } from "../types/task";

export function Home() {
  const [openTask, setOpenTask] = useState<Task[]>([]);

  useEffect(() => {
    api.get("open").then((response) => {
      setOpenTask(response.data);
    });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-10 w-3/4">
        <NewTask />
        {openTask.length > 0 &&
          openTask.map((task) => {
            return <Card task={task} key={task.id} />;
          })}
      </div>
    </div>
  );
}
