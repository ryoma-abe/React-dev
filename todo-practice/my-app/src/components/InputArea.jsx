export const InputArea = ({ text, setInputText, addTodo }) => {
  const style = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  };
  return (
    <div style={style}>
      <input
        id="add-input"
        value={text}
        className="todo-input"
        onChange={setInputText}
      />
      <button id="add-btn" className="add-button" onClick={addTodo}>
        追加
      </button>
    </div>
  );
};
