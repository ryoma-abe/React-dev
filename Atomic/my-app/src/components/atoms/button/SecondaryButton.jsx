import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = ({ children, onClick }) => {
  const Button = styled(BaseButton)`
    background: #11999e;
  `;
  return <Button onClick={onClick}>{children}</Button>;
};
