// import { useEffect, useState } from "react";
// import { api } from "../lib/axios";
// // import { Task } from "../types/task";
import { NewTask } from "../components/NewTask";

export function Home() {
  // const [openTask, setOpenTask] = useState<Task>([]);

  // useEffect(() => {
  //   api.get("open").then((response) => {
  //     setOpenTask(response.data);
  //   });
  // }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-16">
        <NewTask />
      </div>
    </div>
  );
}
