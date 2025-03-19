import { FC } from "react";

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
  return (
    <>
      <div
        onClick={() => onClick(id)}
        className="bg-white p-4 rounded shadow-md"
      >
        <img
          src={imgUrl}
          width="300px"
          height="300px"
          className="w-30 h-30 rounded-full mx-auto mb-2"
        />
        <h3 className="text-lg font-semibold text-center">{userName}</h3>
        <p className="text-gray-600 text-center">{fullName}</p>
      </div>
    </>
  );
};
