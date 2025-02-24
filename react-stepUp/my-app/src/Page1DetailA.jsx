import { useLocation } from "react-router-dom";
const location = useLocation();
console.log(location);

export const Page1DetailA = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">Page1DetailA</h1>
    </div>
  );
};
