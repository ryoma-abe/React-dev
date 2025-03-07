import axios from "axios";
import { useState } from "react";
import { Todo } from "../Todo";
import { TodoType } from "../types/todo";

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
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </>
  );
};
