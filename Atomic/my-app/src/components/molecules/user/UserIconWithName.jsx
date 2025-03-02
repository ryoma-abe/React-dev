import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../provider/UserProvider";

const ProfileImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #f0f0f0;
`;

const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

const SEdit = styled.span`
  text-decoration: underline;
  cursor: pointer;
  color: #aaa;
`;

export const UserIconWithName = ({ image, name }) => {
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <div>
      <ProfileImage height={160} width={160} src={image} alt={name} />
      <UserName>{name}</UserName>
      {isAdmin && <SEdit>編集</SEdit>}
    </div>
  );
};
