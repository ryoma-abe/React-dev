/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const TextStyle = css`
  font-size: 100px;
  color: red;
`;

export const Chaild = ({ open }) => {
  return (
    <>
      <div>{open && <p css={TextStyle}>子コンポーネント</p>}</div>
    </>
  );
};