import { useLocation, useNavigate } from "react-router-dom";
export const PageAboutDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };
  console.log(location);
  return (
    <>
      <div>
        <h1 className="text-center text-red-700">
          ここはアバウト詳細ページです。
        </h1>
        <button onClick={onClickBack}>戻る</button>
      </div>
    </>
  );
};
