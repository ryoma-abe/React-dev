import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

export const Text: FC<Props> = ({ color, fontSize }) => {
  return <p style={{ color, fontSize }}>テキストです</p>;
};
