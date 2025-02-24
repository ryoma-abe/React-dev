import { Link } from "react-router-dom";

export const Page2 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  return (
    <div>
      <h1 className="text-3xl text-center">これはPage2ページです</h1>
      <Link to={{ pathname: "/page2/999", state: arr }}>URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
