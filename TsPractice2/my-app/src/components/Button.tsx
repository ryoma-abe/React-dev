type ButtonProps = {
  onClickAdd: () => void;
};

export const Button = ({ onClickAdd }: ButtonProps) => {
  return (
    <button onClick={onClickAdd} className="p-5 m-10 border">
      カウントアップ
    </button>
  );
};
