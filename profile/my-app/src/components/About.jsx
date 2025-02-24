import styled from "styled-components";

export const About = () => {
  const Section = styled.section`
    max-width: 800px;
    margin-inline: auto;
  `;
  const SectionTitle = styled.h2`
    font-size: 40px;
    text-align: center;
    margin-inline: auto;
    border-bottom: 1px solid #000;
    width: fit-content;
    padding-top: 50px;
  `;
  const AboutContent = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    margin-inline: auto;
    gap: 50px;
    margin-top: 80px;
  `;
  const AboutImg = styled.img`
    max-width: 100px;
    border-radius: 50%;
  `;

  return (
    <Section>
      <SectionTitle>About</SectionTitle>
      <AboutContent>
        <AboutImg src="/src/assets/about.jpg" alt="" />
        <div>
          <h3>KAKERU MIYAICHI</h3>
          <p>
            テキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </AboutContent>
    </Section>
  );
};
