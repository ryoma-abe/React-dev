import { FC } from "react";
import { User } from "./types/User";

type Props = {
  user: User;
};

export const UserProfile: FC<Props> = ({ user }) => {
  console.log(user);

  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join("/")}</dd>
    </dl>
  );
};
