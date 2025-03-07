import { TodoType } from "./types/todo";

export const Todo = ({
  title,
  userId,
  completed = false,
}: Omit<TodoType, "id">) => {
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(id:${userId})`}</p>;
};
