export const Input = ({ placeholder,inputText,onChangeInputText }) => {
  return (
    <input
      className="border p-2 w-full"
      type="text"
      placeholder={placeholder}
      value={inputText}
      onChange={onChangeInputText}
    />
  );
};
