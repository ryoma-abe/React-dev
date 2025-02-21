export const IncompleteArea = ({ incompleteTodo, onClickcomplete }) => {
  return (
    <div className="incomplete-area">
      <h2>未完了のTODO</h2>
      <ul id="todo-list" className="todo-list">
        {incompleteTodo.map((todo, i) => (
          <li key={i} className="todo-item">
            <span>{todo}</span>
            <button
              className="complete-button"
              onClick={() => {
                onClickcomplete(i);
              }}
            >
              完了
            </button>
            <button className="delete-button">削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
