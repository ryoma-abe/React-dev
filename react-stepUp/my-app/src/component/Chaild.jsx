export const Chaild = ({ open }) => {
  return (
    <>
      <div>
        {open && (
          <p className="mt-10 backdrop-blur-lg text-child">子コンポーネント</p>
        )}
      </div>
      <style jsx="true">
        {`
          .text-child {
            font-size: 100px;
            margin: 100px;
          }
        `}
      </style>
    </>
  );
};
