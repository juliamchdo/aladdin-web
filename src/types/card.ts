import { Task } from "./task";

export type CardProps = {
  task: Task,
  isTodayTask: boolean,
  isCompleted: boolean,
  color: string,
  taskCreated?: boolean,
  message?: string,
  onTaskCreated: () => void
};
