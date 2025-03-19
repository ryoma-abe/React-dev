import { FC, memo, useState } from "react";
import { UserCard } from "../molecules/UserCard";
import { Modal } from "../atoms/Modal";

export const UserManagement: FC = memo(() => {
  const [modal, setModal] = useState(false);
  const modalToggle = () => setModal(!modal);
  return (
    <>
      <div className="p-4">
        <UserCard
          id={1}
          imgUrl="https://picsum.photos/id/11/500/350"
          userName={"テスト"}
          fullName="テスト・テスト"
          onClick={modalToggle}
        />
      </div>
      {modal && <Modal modalToggle={modalToggle} />}
    </>
  );
});
