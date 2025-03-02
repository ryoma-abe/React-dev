export const Button = ({ children, onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      className="p-2 bg-green-300 hover:bg-green-700 inline-block whitespace-nowrap"
    >
      {children}
    </button>
  );
};
