import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/button/Input";

export const Login: FC = memo(() => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-fit mx-auto px-20 py-10 shadow-sm rounded-xl bg-white">
        <h2 className="border-b border-gray-300 text-center">
          ユーザー管理アプリ
        </h2>
        <div className="mt-4 space-y-4">
          <div>
            <Input placeholder={"ユーザーID"} />
          </div>
          <div>
            <PrimaryButton>ログイン</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
});
