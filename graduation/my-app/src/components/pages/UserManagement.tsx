import { FC, memo, useEffect, useState } from "react";
import { UserCard } from "../molecules/UserCard";
import { Modal } from "../atoms/Modal";
import { Spinner } from "../atoms/Spinner";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { loading, users, getUsers } = useAllUsers();
  console.log(users);

  const [modal, setModal] = useState(false);
  const modalToggle = () => setModal(!modal);

  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1">
          {users?.map((user) => (
            <div className="p-4">
              <UserCard
                id={1}
                imgUrl="https://picsum.photos/id/11/500/350"
                userName={user.name}
                fullName={user.name}
                onClick={modalToggle}
              />
            </div>
          ))}
        </div>
      )}
      {modal && <Modal modalToggle={modalToggle} />}
    </>
  );
});
