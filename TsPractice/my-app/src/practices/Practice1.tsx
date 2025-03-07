import axios from "axios";
import { useState } from "react";
import { Todo } from "../Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const Practice1 = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchDate = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((r) => {
        setTodos(r.data);
      });
  };
  return (
    <>
      <button onClick={onClickFetchDate}>データを取得</button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </>
  );
};
