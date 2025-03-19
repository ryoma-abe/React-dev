import { FC, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { Spinner } from "../atoms/Spinner";
type userCardProps = {
  id: number;
  imgUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: FC<userCardProps> = ({
  id,
  imgUrl,
  userName,
  fullName,
  onClick,
}) => {
  const { getUsers, loading, users } = useAllUsers();
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
            <div
              onClick={() => onClick(id)}
              className="bg-white p-4 rounded shadow-md"
            >
              <img
                src={imgUrl}
                alt={user.name}
                width="300px"
                height="300px"
                className="w-30 h-30 rounded-full mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold text-center">{userName}</h3>
              <p className="text-gray-600 text-center">{fullName}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
