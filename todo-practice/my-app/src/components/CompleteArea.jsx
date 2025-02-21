export const CompleteArea = ({ completeTodo, onClickReturn }) => {
  return (
    <div className="complete-area">
      <h2>完了のTODO</h2>
      <ul id="complete-todo" className="todo-list">
        {completeTodo.map((todo, i) => (
          <li key={i} className="todo-item">
            <span>{todo}</span>
            <button
              className="return-button"
              onClick={() => {
                onClickReturn(i);
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
