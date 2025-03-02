import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({
      isAdmin: true,
    });
    navigate("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({
      isAdmin: false,
    });
    navigate("/users");
  };

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
