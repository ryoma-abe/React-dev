import { FC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
type userCardProps = {
  name: string;
  emil: string;
  imgUrl: string;
};

export const UserCard: FC<userCardProps> = ({ name, emil, imgUrl }) => {
  const { getUsers, loading, users, setUsers } = useAllUsers();

  return (
    <>
      <div className="bg-white p-4 rounded shadow-md">
        <img
          src={imgUrl}
          alt={name}
          width="300px"
          height="300px"
          className="w-30 h-30 rounded-full mx-auto mb-2"
        />
        <h3 className="text-lg font-semibold text-center">{name}</h3>
        <p className="text-gray-600 text-center">{emil}</p>
      </div>
    </>
  );
};
