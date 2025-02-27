import styled from "styled-components";

const Scard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 400px;
  margin: 0 auto;
`;
export const Card = () => <Scard></Scard>;
