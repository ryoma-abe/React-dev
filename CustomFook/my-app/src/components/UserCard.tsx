import { FC } from "react";
import { UserProfile } from "../types/userProfile";

type UserCardProps = {
  user: UserProfile;
};

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <dl className="space-y-4">
        <div className="border-b pb-2">
          <dt className="text-gray-600 text-sm">名前</dt>
          <dd className="text-gray-900 font-medium">{user.name}</dd>
        </div>
        <div className="border-b pb-2">
          <dt className="text-gray-600 text-sm">メール</dt>
          <dd className="text-gray-900 font-medium">{user.email}</dd>
        </div>
        <div className="border-b pb-2">
          <dt className="text-gray-600 text-sm">住所</dt>
          <dd className="text-gray-900 font-medium">{user.address}</dd>
        </div>
      </dl>
    </div>
  );
};
