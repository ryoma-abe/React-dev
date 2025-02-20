import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState();
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoTxet = (e) => {
    setTodoText(e.target.value);
  };
  const onClickAdd = () => {
    if (todoText) {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };
  const deleteTodos = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    const newcompleteTodos = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newcompleteTodos);
  };
  const returnTodo = (index) => {
    const newTodos1 = [...completeTodos];
    newTodos1.splice(index, 1);
    setcompleteTodos(newTodos1);
    const newTodos2 = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos2);
  };
  return (
    <div className="container">
      {/* 入力エリア */}
      <div className="input-area">
        <input
          id="add-input"
          type="text"
          className="todo-input"
          value={todoText}
          placeholder="TODOを入力"
          onChange={onChangeTodoTxet}
        />
        <button id="add-btn" className="add-button" onClick={onClickAdd}>
          追加
        </button>
      </div>

      {/* 未完了のTODO */}
      <div className="incomplete-area">
        <h2>未完了のTODO</h2>
        <ul id="todo-list" className="todo-list">
          {incompleteTodos.map((todo, index) => (
            <li key={todo} className="todo-item">
              <span>{todo}</span>
              <button
                className="complete-button"
                onClick={() => {
                  completeTodo(index);
                }}
              >
                完了
              </button>
              <button
                className="delete-button"
                onClick={() => {
                  deleteTodos(index);
                }}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 完了したTODO */}
      <div className="complete-area">
        <h2>完了のTODO</h2>
        <ul id="complete-todo" className="todo-list">
          {completeTodos.map((todo, index) => (
            <li key={todo} className="todo-item">
              <span>{todo}</span>
              <button
                className="return-button"
                onClick={() => {
                  returnTodo(index);
                }}
              >
                戻す
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
