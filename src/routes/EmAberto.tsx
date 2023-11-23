import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Task } from "../types/task";
import { Card } from "../components/Card";

export function EmAberto() {
  const [openTask, setOpenTask] = useState<Task[]>([]);

  useEffect(() => {
    api.get("open").then((response) => {
      setOpenTask(response.data);
    });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-10 w-3/4">
        {openTask.length > 0 && (
          <div>
            <h2 className="card-title">Tarefas em aberto</h2>
            {openTask.map((task) => {
              return <Card task={task} key={task.id} isTodayTask={false} isCompleted={false}/>;
            })}
          </div>
        )}
        {openTask.length === 0 && (
          <h2 className="card-title">Não há tarefas em aberto</h2>
        )}
      </div>
    </div>
  );
}
