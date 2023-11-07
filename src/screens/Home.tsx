import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Task } from "../types/task";

export function Home() {
  const [openTask, setOpenTask] = useState<Task>([]);

  useEffect(() => {
    api.get("open").then((response) => {
      setOpenTask(response.data);
    });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="px-6 flex flex-col gap-16">
        {openTask &&
          openTask.map((task) => {
            return <p key={task.id}>{task.title}</p>;
          })}
      </div>
    </div>
  );
}
