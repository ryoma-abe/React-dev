type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = ({ title, userId, completed }: TodoType) => {
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(id:${userId})`}</p>;
};
