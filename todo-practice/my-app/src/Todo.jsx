import { CompleteArea } from "./components/CompleteArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { InputArea } from "./components/InputArea";
import { useState } from "react";

import "./Todo.css";

export const Todo = () => {
  const [text, setText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([]);

  const setInputText = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    const NewTodo = [...incompleteTodo, text];
    console.log(NewTodo);

    setIncompleteTodo(NewTodo);
    setText("");
  };

  return (
    <div className="container">
      {/* 入力エリア */}
      <InputArea text={text} setInputText={setInputText} addTodo={addTodo} />
      {/* 未完了のTODO */}
      <IncompleteArea incompleteTodo={incompleteTodo} />
      {/* 完了したTODO */}
      <CompleteArea />
    </div>
  );
};
