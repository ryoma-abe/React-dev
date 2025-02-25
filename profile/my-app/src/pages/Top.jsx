import styled from "styled-components";
import { About } from "../components/About";

export const Top = () => {
  const FirstViewImg = styled.img`
    height: 600px;
  `;
  return (
    <>
      <FirstViewImg src="/src/assets/mainvisual.jpg" alt="自転車の画像" />
      <About />
    </>
  );
};
