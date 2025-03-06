import axios from "axios";
import { useState } from "react";
import { Todo } from "../Todo";


export const Practice1 = () => {
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchDate = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((r) => {
      setTodos(r.data);
    });
  };
  return (
    <>
      <button onClick={onClickFetchDate}>データを取得</button>
      {todos.map((todo) => (
        <Todo/>
      ))}
    </>
  );
};
