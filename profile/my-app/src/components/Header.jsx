import styled from "styled-components";

export const Header = () => {
  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    max-width: 1000px;
    margin-inline: auto;
  `;
  const Logo = styled.img`
    max-width: 120px;
  `;
  const HeaderUl = styled.ul`
    display: flex;
    gap: 20px;
  `;

  return (
    <header>
      <HeaderWrapper>
        <Logo src="/src/assets/logo.svg" alt="ロゴ画像" />
        <nav>
          <HeaderUl>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Bicycle</a>
            </li>
          </HeaderUl>
        </nav>
      </HeaderWrapper>
    </header>
  );
};
