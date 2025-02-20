export const CompleteTodo = ({ returnTodo, completeTodos }) => {
  return (
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
  );
};
