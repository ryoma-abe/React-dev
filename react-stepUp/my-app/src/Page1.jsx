import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">これはPage1ページです</h1>
      <Link to="/page1/detailA">DetailA</Link>
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};
