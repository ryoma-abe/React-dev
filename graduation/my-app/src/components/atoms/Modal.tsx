import { FC } from "react";

type modalProps = {
  modalToggle: () => void;
};
export const Modal: FC<modalProps> = ({ modalToggle }) => {
  return (
    <>
      <div
        onClick={modalToggle}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-md md:max-w-xl mx-auto overflow-hidden">
          <div className="flex justify-between items-center border-b px-6 py-4">
            <h3 className="text-lg font-medium text-gray-900">タイトル</h3>
            <button className="text-gray-400 hover:text-gray-500 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="px-6 py-4">中身</div>

          <div className="px-6 py-4 bg-gray-50 border-t flex justify-end space-x-3">
            <button
              onClick={modalToggle}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              キャンセル
            </button>
            <button
              onClick={modalToggle}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
