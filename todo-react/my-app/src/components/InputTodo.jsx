export const InputTodo = ({ todoText, onChange, onClick }) => {
  return (
    <div className="input-area">
      <input
        id="add-input"
        type="text"
        className="todo-input"
        value={todoText}
        placeholder="TODOを入力"
        onChange={onChange}
      />
      <button id="add-btn" className="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
