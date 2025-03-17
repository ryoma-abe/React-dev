import { FC, memo } from "react";
import { UserCard } from "../molecules/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">ユーザー一覧</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <UserCard
          name="山田太郎"
          emil="yamada@example.com"
          imgUrl="https://picsum.photos/id/11/500/350"
        />
      </div>
    </div>
  );
});
