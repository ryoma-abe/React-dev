import styled from "styled-components"
export const BaseButton = ({children,onClickFn}) => {
  return (
    <SBaseButton onClick={onClickFn}>
      {children}
    </SBaseButton>
  );
};
const SBaseButton =styled.button`
padding: 10px;
`