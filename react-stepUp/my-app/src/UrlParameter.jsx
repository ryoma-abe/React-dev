import { useParams } from "react-router-dom";
export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-3xl text-center">UrlParameterです</h1>
      <p>{id}です</p>
    </div>
  );
};
