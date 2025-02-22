export const Chaild = ({ open }) => {
  return (
    <>
      <div>{open && <p className="mt-10 backdrop-blur-lg">子コンポーネント</p>}</div>
    </>
  );
};
