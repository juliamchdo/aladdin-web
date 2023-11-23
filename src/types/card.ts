import { Task } from "./task";

export type CardProps = {
  task: Task;
  isTodayTask: boolean;
  isCompleted: boolean
};
