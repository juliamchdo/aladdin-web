import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Task } from "../types/task";
import { Card } from "../components/Card";

export function Finalizados() {
  const [completedTask, setCompletedTask] = useState<Task[]>([]);

  useEffect(() => {
    api.get("completed").then((response) => {
      setCompletedTask(response.data);
    });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-10 w-3/4">
      {completedTask.length > 0 && (
          <div>
            <h2 className="card-title">Tarefas em aberto</h2>
            {completedTask.map((task) => {
              return <Card task={task} key={task.id} isTodayTask={false} isCompleted={true}/>;
            })}
          </div>
        )}
        {completedTask.length === 0 && (
          <h2 className="card-title">Não há tarefas finalizadas</h2>
        )}
      </div>
    </div>
  );
}
