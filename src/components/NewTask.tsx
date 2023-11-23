import { SetStateAction, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { api } from "../lib/axios";
import { isEmpty } from "../utils/EmptyNullUndefined";
import "../styles/new-task.css";
import * as Label from "@radix-ui/react-label";
import { Task } from "../types/task";
import dayjs from "dayjs";

type TaskProps = {
  openTask: Task,
  setOpenTask: React.Dispatch<React.SetStateAction<Task>>
}

export function NewTask({openTask, setOpenTask} : TaskProps) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleTask = (e: { target: { value: SetStateAction<string> } }) => {
    setTask(e.target.value);
  };

  const handleDate = (e: { target: { value: SetStateAction<string> } }) => {
    setDate(e.target.value);
  };

  async function createNewTask() {
    if (isEmpty(task) || isEmpty(date)) {
      window.alert("Preencha todos os campos!");
      return false;
    } else {
      await api
        .post("/create", {
          title: task,
          deadline: date,
        })
        .then((response) => {
          window.alert("Tarefa cadastrada com sucesso!");
          const today = dayjs().startOf('day').toDate();
          console.log(today)
          // console.log(response.data)
          // setOpenTask(response.data)
        });
    }
  }

  return (
    <form className="form">
      <div className="form-group w-screen flex sm:justify-center">
        <div className="form-container">
          <Label.Root className="form-label" htmlFor="task-name">
            Tarefa
          </Label.Root>
          <input
            className="form-input"
            type="text"
            id="task-name"
            onChange={handleTask}
            required={true}
          />
        </div>

        <div className="form-container">
          <Label.Root className="form-label" htmlFor="task-date">
            Data
          </Label.Root>
          <input
            className="form-input"
            type="date"
            id="task-date"
            onChange={handleDate}
            required={true}
          />
        </div>

        <PlusCircle size={32} color="#1565C0" onClick={createNewTask} />
      </div>
    </form>
  );
}
