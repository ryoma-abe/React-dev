import styled from "styled-components";

export const PrimaryButton = ({ children }) => {
  const Button = styled.button`
    background: blue;
    color: white;
    padding: 10px 20px;
  `;
  const ButtonWrapper = styled.button`
    width: 100%;
    text-align: center;
    background-color: #fff;
    border: none;
  `;
  return (
    <ButtonWrapper>
      <Button>{children}</Button>
    </ButtonWrapper>
  );
};
