import {  useEffect, useState } from "react";
import { api } from "../lib/axios";
import { NewTask } from "../components/NewTask";
import { Card } from "../components/Card";
import { Task } from "../types/task";
import { EmptyTask } from "../components/EmptyTask";

export function Home() {
  const [openTask, setOpenTask] = useState<Task[]>([]);
  const emptyMessage = "Não há tarefas para o dia de hoje"

  useEffect(() => {
    api.get("today").then((response) => {
      setOpenTask(response.data);
    });
  }, [openTask]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-10 w-3/4">
        <NewTask />
        {openTask.length > 0 && (
          <div>
            <h2 className="card-title">Tarefas do dia</h2>
            {openTask.map((task) => {
              return (
                <Card
                  task={task}
                  key={task.id}
                  isTodayTask={true}
                  isCompleted={false}
                  color="bg-today"
                />
              );
            })}
          </div>
        )}
        {openTask.length === 0 && <EmptyTask msg={emptyMessage} />}
      </div>
    </div>
  );
}
