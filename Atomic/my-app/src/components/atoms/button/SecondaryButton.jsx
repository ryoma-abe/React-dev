import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = ({ children }) => {
  const Button = styled(BaseButton)`
    background: #11999e;
  `;
  return <Button>{children}</Button>;
};
