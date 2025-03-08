import { FC } from "react";
import { TodoType } from "./types/todo";

export const Todo: FC<Omit<TodoType, "id">> = ({
  title,
  userId,
  completed = false,
}) => {
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(id:${userId})`}</p>;
};
