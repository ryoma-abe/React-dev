import styled from "styled-components";

export const BaseInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;
export const Input = ({ placeholder = "" }) => {
  return <BaseInput type="text" placeholder={placeholder} />;
};
