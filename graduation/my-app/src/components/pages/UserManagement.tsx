import { FC, memo, useEffect, useState } from "react";
import { UserCard } from "../molecules/UserCard";
import { Modal } from "../atoms/Modal";
import { Spinner } from "../atoms/Spinner";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";

export const UserManagement: FC = memo(() => {
  const { loading, users, getUsers } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  console.log(selectedUser);
  const [modal, setModal] = useState(false);

  const openModal = (id: number) => {
    onSelectUser({ id, users });
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => getUsers(), [getUsers]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1">
          {users?.map((user) => (
            <div className="p-4" key={user.id}>
              <UserCard
                id={user.id}
                imgUrl="https://picsum.photos/id/11/500/350"
                userName={user.name}
                fullName={user.name}
                onClick={openModal}
              />
            </div>
          ))}
        </div>
      )}
      {modal && <Modal modalToggle={closeModal} />}
    </>
  );
});
