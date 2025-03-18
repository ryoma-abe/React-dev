import { FC, memo } from "react";
import { UserCard } from "../molecules/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <div className="p-4">
      <UserCard imgUrl="https://picsum.photos/id/11/500/350" />
    </div>
  );
});
