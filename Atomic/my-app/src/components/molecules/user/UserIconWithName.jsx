import styled from "styled-components";

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

export const UserIconWithName = ({ image, name }) => {
  return (
    <div>
      <ProfileImage height={160} width={160} src={image} alt={name} />
      <UserName>{name}</UserName>
    </div>
  );
};
