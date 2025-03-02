export const Button = ({ children, onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      className="p-2 bg-green-300 hover:bg-green-700 ml-2"
    >
      {children}
    </button>
  );
};
