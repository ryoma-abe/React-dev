import { Button } from "../atoms/Button";
import { Link } from "react-router-dom";

export const ButtonArea = () => {
  return (
    <div className="w-full flex gap-2">
      <Link to="/">
        <Button>すべて</Button>
      </Link>
      <Link to="/incomplete">
        <Button>未完了</Button>
      </Link>
      <Link to="/complete">
        <Button>完了</Button>
      </Link>
    </div>
  );
};
