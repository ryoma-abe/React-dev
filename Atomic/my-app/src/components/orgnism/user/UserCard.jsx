import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

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
  overflow-wrap: break-word;
`;

// UserCard コンポーネント
export const UserCard = ({ user,isAdmin }) => {
  return (
    <Card>
      <UserIconWithName name={user.name} image={user.image} isAdmin={isAdmin}/>
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
