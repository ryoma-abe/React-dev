type CountProps = {
  count: number;
};

export const Display = ({ count }: CountProps) => {
  return <p className="text-center text-3xl p-10 bg-red-300">{count}</p>;
};
