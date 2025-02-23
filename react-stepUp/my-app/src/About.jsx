import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">About</h1>
      <Link to="/about/detailA">DetailA</Link>
      <Link to="/about/detailB">DetailB</Link>
    </div>
  );
};
