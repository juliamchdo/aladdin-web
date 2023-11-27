import "../styles/empty-task.css";
import { EmptyMessageProps } from "../types/empty-message";

export function EmptyTask(item: EmptyMessageProps) {
  return (
    <div className="empty-card">
      <h3>{item.msg}</h3>
    </div>
  );
}
