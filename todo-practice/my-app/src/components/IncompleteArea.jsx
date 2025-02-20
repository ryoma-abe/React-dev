export const IncompleteArea = () => {
  return (
    <div className="incomplete-area">
      <h2>未完了のTODO</h2>
      <ul id="todo-list" className="todo-list">
        <li className="todo-item">
          <span>TODOです</span>
          <button className="complete-button">完了</button>
          <button className="delete-button">削除</button>
        </li>
        <li className="todo-item">
          <span>TODOです</span>
          <button className="complete-button">完了</button>
          <button className="delete-button">削除</button>
        </li>
      </ul>
    </div>
  );
};
