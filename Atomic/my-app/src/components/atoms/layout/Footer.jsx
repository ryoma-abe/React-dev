import styled from "styled-components";

const Sfooter = styled.header`
  background-color: skyblue;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 30px;
  text-align: center;
`;

export const Footer = () => {
  return <Sfooter>&copy; 2000 test Inc.</Sfooter>;
};
