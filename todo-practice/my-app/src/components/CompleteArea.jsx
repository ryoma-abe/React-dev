export const CompleteArea = () => {
  return (
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
  );
};
