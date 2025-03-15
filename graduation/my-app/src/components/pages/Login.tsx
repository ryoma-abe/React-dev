import { ChangeEvent, FC, memo, useState } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/button/Input";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login } = useAuth();
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const onClickLogin = () => login(userId);
  const disabledFlg = () => {
    if (userId) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-fit mx-auto px-20 py-10 shadow-sm rounded-xl bg-white">
        <h2 className="border-b border-gray-300 text-center">
          ユーザー管理アプリ
        </h2>
        <div className="mt-4 space-y-4">
          <div>
            <Input
              placeholder={"ユーザーID"}
              value={userId}
              onChange={onChangeUserId}
            />
          </div>
          <div>
            <PrimaryButton onClick={onClickLogin} disabled={disabledFlg()}>
              ログイン
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
});
