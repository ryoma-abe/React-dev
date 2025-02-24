import { useParams, useLocation } from "react-router-dom";
export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1 className="text-3xl text-center">UrlParameterです</h1>
      <p>{id}です</p>
      <p>{query.get("name")}です</p>
    </div>
  );
};
