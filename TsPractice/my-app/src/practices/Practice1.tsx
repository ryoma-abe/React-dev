export const Practice1 = () => {
  const getTotalFee = (num: number): number => {
    const total: number = num * 1.1;
    return total;
  };

  const onClickPractice = () => console.log(getTotalFee(1000));
  return (
    <>
      <button onClick={onClickPractice}>練習問題を実行</button>
    </>
  );
};
