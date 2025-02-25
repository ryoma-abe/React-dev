import { useLocation } from "react-router-dom";
export const PageAboutDetail = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div>
        <h1 className="text-center text-red-700">
          ここはアバウト詳細ページです。
        </h1>
      </div>
    </>
  );
};
