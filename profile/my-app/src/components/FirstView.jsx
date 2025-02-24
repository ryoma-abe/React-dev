import styled from "styled-components";

export const FirstView = () => {
  const FirstViewImg = styled.img`
    height: 600px;
  `
  return (
    <>
      <FirstViewImg src="/src/assets/mainvisual.jpg" alt="自転車の画像" />
    </>
  );
};
