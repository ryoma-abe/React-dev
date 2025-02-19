import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "TODOです1",
    "TODOです2",
  ]);
  return (
    <div className="container">
      {/* 入力エリア */}
      <div className="input-area">
        <input id="add-input" type="text" className="todo-input" />
        <button id="add-btn" className="add-button">
          追加
        </button>
      </div>

      {/* 未完了のTODO */}
      <div className="incomplete-area">
        <h2>未完了のTODO</h2>
        <ul id="todo-list" className="todo-list">
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{todo}</span>
                <button className="complete-button">完了</button>
                <button className="delete-button">削除</button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 完了したTODO */}
      <div className="complete-area">
        <h2>完了のTODO</h2>
        <ul id="complete-todo" className="todo-list">
          <li className="todo-item">
            <span>TODOでした</span>
            <button className="return-button">戻す</button>
          </li>
          <li className="todo-item">
            <span>TODOでした</span>
            <button className="return-button">戻す</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
