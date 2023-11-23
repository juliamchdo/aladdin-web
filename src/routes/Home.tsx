import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { NewTask } from "../components/NewTask";
import { Card } from "../components/Card";
import { Task } from "../types/task";

export function Home() {
  const [openTask, setOpenTask] = useState<Task>([]);

  useEffect(() => {
    api.get("open").then((response) => {
      setOpenTask(response.data);
    });
  }, [openTask]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-16 w-screen mb-10">
        <NewTask openTask={openTask} setOpenTask={setOpenTask}/>
        {openTask.length > 0 &&
          openTask.map((task, i) => {
            return <Card key={i} title={task.title} />
          })
        }
      </div>
    </div>
  );
}
