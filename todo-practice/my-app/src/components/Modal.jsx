export const Modal = () => {
  return (
    <>
      <button
        id="modalOpen"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
      >
        モーダルを開く
      </button>

      <div id="myModal" className="fixed inset-0 z-50 hidden">
        <div className="fixed inset-0 bg-black bg-opacity-50">
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl w-full max-w-md m-4 p-6">
            <span className="close-button absolute top-2 right-2 text-gray-400 hover:text-gray-500 text-2xl cursor-pointer">
              &times;
            </span>
            <p className="text-gray-800 mt-4">
              モーダルウィンドウのコンテンツがここに入ります。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
