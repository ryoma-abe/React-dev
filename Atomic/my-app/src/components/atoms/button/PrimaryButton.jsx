import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = ({ children }) => {
  const Button = styled(BaseButton)`
    background: #40514e;
  `;
  return <Button>{children}</Button>;
};
