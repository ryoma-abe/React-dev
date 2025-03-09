import { ModalType } from "../types/ModalType";

export const Modal = ({ onClickToggle }: ModalType) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      {/* オーバーレイ背景 */}
      <div
        onClick={onClickToggle}
        className="fixed inset-0 bg-black bg-opacity-50"
      ></div>

      {/* モーダルコンテンツ */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 my-8 z-10">
        {/* モーダルヘッダー */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-medium">モーダルタイトル</h3>
          <button className="text-gray-400 hover:text-gray-500 focus:outline-none">
            ✕
          </button>
        </div>

        {/* モーダル本文 */}
        <div className="p-6">
          <p>モーダルのコンテンツがここに入ります。</p>
        </div>

        {/* モーダルフッター */}
        <div className="flex justify-end p-4 border-t space-x-2">
          <button
            onClick={onClickToggle}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            キャンセル
          </button>
          <button
            onClick={onClickToggle}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  );
};
