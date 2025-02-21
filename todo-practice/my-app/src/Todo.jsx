import { CompleteArea } from "./components/CompleteArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { InputArea } from "./components/InputArea";
import { useState } from "react";

import "./Todo.css";
// スタイルの定義
export const Todo = () => {
  const style = {
    color: "red",
  };
  // 追加エリアのstate
  const [text, setText] = useState("");
  // 未完了エリアのstate
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  // 完了エリアのstate
  const [completeTodo, setCompleteTodo] = useState([]);

  const setInputText = (e) => {
    setText(e.target.value);
  };
  // 追加ボタンの関数
  const addTodo = () => {
    const NewTodo = [...incompleteTodo, text];
    console.log(NewTodo);

    setIncompleteTodo(NewTodo);
    setText("");
  };
  // 完了ボタンの関数
  const onClickcomplete = (i) => {
    const NewIncompleteTodo = [...incompleteTodo];
    NewIncompleteTodo.splice(i, 1);
    const newCompleteTodo = [...completeTodo, incompleteTodo[i]];
    setIncompleteTodo(NewIncompleteTodo);
    setCompleteTodo(newCompleteTodo);
  };

  // 削除ボタンの関数
  const deleteTodo = (i) => {
    const NewIncompleteTodo = [...incompleteTodo];
    NewIncompleteTodo.splice(i, 1);
    setIncompleteTodo(NewIncompleteTodo);
  };

  // 戻すボタンの関数
  const onClickReturn = (i) => {
    const NewCompleteTodo = [...completeTodo];
    NewCompleteTodo.splice(i, 1);
    const newInCompleteTodo = [...incompleteTodo, completeTodo[i]];
    setCompleteTodo(NewCompleteTodo);
    setIncompleteTodo(newInCompleteTodo);
  };
  // 条件の確認
  const maxTodo = incompleteTodo.length >= 5;

  return (
    <div className="container">
      {/* 入力エリア */}
      <InputArea
        text={text}
        setInputText={setInputText}
        addTodo={addTodo}
        disabled={maxTodo}
      />

      {maxTodo && <p style={style}>タスクは5個位がちょうどいい</p>}

      {/* 未完了のTODO */}
      <IncompleteArea
        incompleteTodo={incompleteTodo}
        onClickcomplete={onClickcomplete}
        deleteTodo={deleteTodo}
      />
      {/* 完了したTODO */}
      <CompleteArea completeTodo={completeTodo} onClickReturn={onClickReturn} />
    </div>
  );
};
