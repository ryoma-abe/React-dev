import { useState } from "react";
import "./Todo.css";
import { InputTodo } from "./components/inputTodo";
import { InCompleteTodo } from "./components/InCompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const Todo = () => {
  // ステイト定義
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力を取得する関数
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  // 追加ボタンの関数
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // 削除ボタンの関数
  const deleteTodos = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了ボタンの関数
  const completeTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  // 戻るボタンの関数
  const returnTodo = (index) => {
    const newTodos1 = [...completeTodos];
    newTodos1.splice(index, 1);
    setCompleteTodos(newTodos1);
    const newTodos2 = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos2);
  };
  return (
    <div className="container">
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InCompleteTodo
        deleteTodos={deleteTodos}
        completeTodo={completeTodo}
        incompleteTodos={incompleteTodos}
      />
      <CompleteTodo returnTodo={returnTodo} completeTodos={completeTodos} />
    </div>
  );
};
