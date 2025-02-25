import { useNavigate } from "react-router-dom";

export const PageAbout = () => {
  const navigate = useNavigate();

  const onClickHistory = () => {
    navigate("/page/about/about-detail");
  };

  return (
    <>
      <div>
        <h1 className="text-center text-4xl mt-10">About</h1>
      </div>
      <div className="text-center mt-6">
        <button
          className="bg-blue-500 hover:bg-yellow-500
          p-3 rounded-full font-bold transition duration-300
          text-white"
          onClick={onClickHistory}
        >
          詳細へ
        </button>
      </div>
    </>
  );
};
