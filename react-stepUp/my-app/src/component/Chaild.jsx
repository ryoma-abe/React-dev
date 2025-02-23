import styled from "styled-components";

export const Chaild = ({ open }) => {
  return (
    <>
      <div>
        {open && <SText>子コンポーネント</SText>}
        <p>2つ目のテキストです</p>
        <SButton>リセット</SButton>
      </div>
    </>
  );
};

const SText = styled.p`
  font-size: 100px;
  color: red;
`;
const SButton = styled.button`
  background-color: red;
  padding: 10px 20px;
  margin-top: 100px;
  &:hover {
    background-color: blue;
    color: #fff;
  }
`;
