import { FC, memo } from "react";

export const Login: FC = memo(() => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-fit mx-auto px-10 py-5 shadow-sm rounded-xl bg-white">
        <h2 className="border-b border-gray-300 text-center">
          ユーザー管理アプリ
        </h2>
        <div className="mt-4 space-y-4">
          <div>
            <input
              type="text"
              placeholder="ユーザーID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors">
              ログイン
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
