import { Header } from "../atoms/Header";

export const Default = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-2">{children}</div>
    </>
  );
};
