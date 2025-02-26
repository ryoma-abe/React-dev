import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = ({ children }) => {
  const Button = styled(BaseButton)`
    background: #11999e;
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
