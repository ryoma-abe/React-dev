import axios from "axios";

export const Practice1 = () => {
  const onClickFetchDate = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((r) => {
      console.log(r.data);
    });
  };
  return (
    <>
      <button onClick={onClickFetchDate}>データを取得</button>
    </>
  );
};
