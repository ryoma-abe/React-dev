import styled from "styled-components";
import { Card } from "../../atoms/card/Card";

const ProfileImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #f0f0f0;
`;

const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 8px 0 16px;
  color: #333;
`;

const InfoList = styled.dl`
  width: 100%;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;
  margin: 0;
`;

const InfoLabel = styled.dt`
  font-weight: bold;
  color: #666;
  margin: 0;
`;

const InfoValue = styled.dd`
  margin: 0;
  color: #333;
`;

// UserCard コンポーネント
export const UserCard = ({ user }) => {
  return (
    <Card>
      <ProfileImage height={160} width={160} src={user.image} alt={user.name} />

      <UserName>{user.name}</UserName>
      <InfoList>
        <InfoLabel>メール</InfoLabel>
        <InfoValue>{user.mail}</InfoValue>

        <InfoLabel>電話</InfoLabel>
        <InfoValue>{user.TEL}</InfoValue>

        <InfoLabel>会社名</InfoLabel>
        <InfoValue>{user.company}</InfoValue>

        <InfoLabel>WEB</InfoLabel>
        <InfoValue>{user.web}</InfoValue>
      </InfoList>
    </Card>
  );
};
