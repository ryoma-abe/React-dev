export const InCompleteTodo = ({
  incompleteTodos,
  completeTodo,
  deleteTodos,
}) => {
  return (
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
  );
};
