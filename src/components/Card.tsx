import "../styles/card.css";
import { Check, Trash } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CardProps } from "../types/card";
import { api } from "../lib/axios";
import dayjs from "dayjs";

export function Card(task: CardProps) {
  async function handleToggleTask(id: string) {
    await api.patch(`/tasks/${id}/toggle`);
  }

  async function deleteTask(id: string) {
    await api.delete(`/delete/${id}`).catch((err) => {
      console.log(err);
    });
  }

  const date = dayjs(task.task.deadline);
  const taskDate = date.format("DD/MM/YYYY");

  return (
    <div className="card mb-8">
      <Checkbox.Root
        className="flex items-center gap-8 focus:outline-none"
        id="c1"
        onCheckedChange={() => handleToggleTask(task.task.id)}
      >
        {!task.isCompleted && (
          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-white">
            <Checkbox.Indicator className="">
              <Check size={20} className="bg-green-500 text-white rounded-lg" />
            </Checkbox.Indicator>
          </div>
        )}

        <span className="font-semibold text-3xl leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-600">
          {task.task.title}
        </span>
      </Checkbox.Root>

      {!task.isTodayTask && (
        <div className="flex items-center gap-8">
          <p className="text-2xl">{taskDate}</p>
          <button
            onClick={() => deleteTask(task.task.id)}
            type="button"
            className="cursor-pointer"
          >
            <Trash size={30} color="#1565C0" />
          </button>
        </div>
      )}
    </div>
  );
}
