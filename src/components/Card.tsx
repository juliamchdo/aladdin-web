import "../styles/card.css";
import { Check, Trash } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CardProps } from "../types/card";
import { api } from "../lib/axios";
import dayjs from "dayjs";
import { useState } from "react";

export function Card(task: CardProps) {
  const [completed, setCompleted] = useState(false);
  const [deleted, setDeleted] = useState(false);

  async function handleToggleTask(id: string) {
    try {
      await api.patch(`/tasks/${id}/toggle`, {}, { headers: { 'Content-Type': 'application/json' } });
      setCompleted(!completed);
    } catch (error) {
      console.error("Erro na solicitação PATCH:", error);
    }
  }
  

  async function deleteTask(id: string) {
    await api
      .delete(`/delete/${id}`)
      .then(() => {
        setDeleted(true);
        task.onTaskCreated();
      })
      .catch((e) => {
        console.error(e.message);
      });
  }

  const date = dayjs(task.task.deadline);
  const taskDate = date.format("DD/MM/YYYY");

  return (
    <div className={"card mb-8 text-gray-800 " + task.color}>
        <Checkbox.Root
          className="flex items-center gap-8 focus:outline-none"
          id="c1"
          onCheckedChange={() => handleToggleTask(task.task.id)}
        >
          {!task.isCompleted && (
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-white">
              <Checkbox.Indicator className="">
                <Check
                  size={20}
                  className="bg-green-500 text-white rounded-lg"
                />
              </Checkbox.Indicator>
            </div>
          )}

          <span className="font-semibold text-3xl leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-600">
            {task.task.title}
          </span>
        </Checkbox.Root>

        {completed && (
          <span className="text-2xl text-lime-800	">Tarefa completada!</span>
        )}

        {!task.isTodayTask && (
          <div className="flex items-center gap-8">
            <p className="text-2xl tracking-wider">{taskDate}</p>
            <button
              onClick={() => deleteTask(task.task.id)}
              type="button"
              className="cursor-pointer"
              title="Excluir Tarefa"
            >
              {!task.isCompleted && (
                <Trash size={30} weight="fill" color="#263238" />
              )}
            </button>
          </div>
        )}
      {deleted && <span className="text-2xl text-white">Tarefa deletada!</span>}
    </div>
  );
}
