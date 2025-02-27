import { Link } from "react-router-dom";
import styled from "styled-components";

const Sheader = styled.header`
  background-color: skyblue;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Header = () => {
  return (
    <Sheader>
      <Link to="/">HOME</Link>
      <Link to="/USERS">USERS</Link>
    </Sheader>
  );
};
