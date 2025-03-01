import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";

export const Top = () => {
  const navigate = useNavigate();
  const onClickAdmin = () => navigate("/users", { state: { isAdmin: true } });

  const onClickGeneral = () =>
    navigate("/users", { state: { isAdmin: false } });

  return (
    <Scontainer>
      <h2>トップページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
